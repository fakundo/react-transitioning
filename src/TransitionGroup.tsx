import { Children, cloneElement, useRef, isValidElement } from 'react';
import { useIsoEffect } from './useIsoEffect';

export type TransitionGroupProps = {
  children: React.ReactNode;

  /**
   * A boolean indicating whether the children should transition through the "appear"
   * phase when the component is first mounted.
   *
   * @default false
   */
  appear?: boolean;

  /**
   * A boolean indicating whether the children should transition through the "enter"
   * phases when they are added to the DOM.
   *
   * @default true
   */
  enter?: boolean;

  /**
   * A boolean indicating whether the children should transition through the "exit"
   * phases when they are removed from the DOM.
   *
   * @default false
   */
  exit?: boolean;

  /**
   * The duration of the transition in milliseconds. This value can be used to set the
   * transition duration for all children in the group.
   *
   * @default 500
   */
  duration?: number;
};

type VisibleElement = {
  element: React.ReactElement<any>;
  removeTimeout?: number;
};

/**
 * The `TransitionGroup` component handles a collection of `Transition` child elements
 * and applies transition animations when elements enter and exit the DOM.
 * It can be used to animate multiple elements, controlling their appearance and removal in a container.
 */
export function TransitionGroup(props: TransitionGroupProps) {
  const { children, appear = false, enter = true, exit = false, duration = 500 } = props;

  const mountedRef = useRef(false);
  const prevVisibleElementsRef = useRef<VisibleElement[]>([]);
  const nextVisibleElements: VisibleElement[] = [];
  const nextElements: React.ReactElement[] = [];

  const derivedElementsIndices: { [key in string]: number } = {};
  const derivedElements: React.ReactElement[] = [];

  Children.toArray(children).forEach(child => {
    if (isValidElement(child)) {
      derivedElementsIndices[child.key!] = derivedElements.length;
      derivedElements.push(child);
    }
  });

  const addVisibleElement = (
    element: VisibleElement['element'],
    removeTimeout?: VisibleElement['removeTimeout'],
  ) => {
    const elementClone = cloneElement(element, {
      in: !removeTimeout,
      enter: false,
      exit: element.props.exit ?? exit,
      duration: element.props.duration ?? duration,
      appear: mountedRef.current ? (element.props.enter ?? enter) : (element.props.appear ?? appear),
    });

    nextVisibleElements.push({ element, removeTimeout });
    nextElements.push(elementClone);
  };

  const makeRemoveTimeout = (elementToRemove: VisibleElement['element']) =>
    window.setTimeout(() => {
      const { current: prevVisibleChildren } = prevVisibleElementsRef;
      const indexToDelete = prevVisibleChildren.findIndex(
        ({ element }) => element.key === elementToRemove.key,
      );
      if (indexToDelete >= 0) {
        prevVisibleChildren.splice(indexToDelete, 1);
      }
    }, elementToRemove.props.duration ?? duration);

  let lastAddedElementIndex = 0;

  // First, check the previously visible elements
  prevVisibleElementsRef.current.forEach(({ element: prevElement, removeTimeout: prevRemoveTimeout }) => {
    // Search for the element in the newly derived children
    const foundIndex = derivedElementsIndices[prevElement.key!] ?? -1;
    // The visible element was not found, begin removing it
    if (foundIndex < 0) {
      // The visible element already has a removal timeout, which means it's currently exiting
      if (prevRemoveTimeout) {
        addVisibleElement(prevElement, prevRemoveTimeout);
      } else {
        // Start the removal timeout, but continue rendering this element
        const shouldAddTimeout = prevElement.props.exit ?? exit;
        if (shouldAddTimeout) {
          addVisibleElement(prevElement, makeRemoveTimeout(prevElement));
        }
      }
    } else {
      // Visible element found in derived children, delete the removal timeout if it exists
      if (prevRemoveTimeout) {
        window.clearTimeout(prevRemoveTimeout);
      }
      // Add derived element along with all previous children
      for (let i = lastAddedElementIndex; i <= foundIndex; i += 1) {
        addVisibleElement(derivedElements[i]);
      }
    }
    // Save the index to loop only through the remaining element
    lastAddedElementIndex = Math.max(lastAddedElementIndex, foundIndex + 1);
  });

  // Add the remaining elements
  for (let i = lastAddedElementIndex; i < derivedElements.length; i += 1) {
    addVisibleElement(derivedElements[i]);
  }

  // Mark as mounted
  useIsoEffect(() => {
    mountedRef.current = true;
  }, []);

  // Save the visible elements
  prevVisibleElementsRef.current = nextVisibleElements;

  return nextElements;
}
