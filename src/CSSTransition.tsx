import { Children, cloneElement, useMemo } from 'react';
import { Transition, TransitionPhase, TransitionProps } from './Transition';

/**
 * `CSSTransitionClassNames` represents the class names used for CSS-based transitions in different phases.
 * This type can either be a single string, which will be applied to all transition phases
 * with a suffix added based on the current phase, or an object where each key
 * corresponds to a specific transition phase, and the value is the class name for that phase.
 */
export type CSSTransitionClassNames =
  | string
  | {
      [key in TransitionPhase]?: string;
    };

export type CSSTransitionProps = Omit<TransitionProps, 'children'> & {
  /**
   * The child element to which the animation will be applied.
   * This should be a single React element that supports the `className` prop.
   * The `className` prop will be combined with the class name from the `classNames` prop, based on the current transition phase.
   */
  children: React.ReactElement<{ className?: string }>;

  /**
   * Defines the CSS class names to be applied for each transition phase.
   */
  classNames: CSSTransitionClassNames;
};

const SUFFIX: {
  [key in TransitionPhase]: string;
} = {
  [TransitionPhase.APPEAR]: '-appear',
  [TransitionPhase.APPEAR_ACTIVE]: '-appear-active',
  [TransitionPhase.APPEAR_DONE]: '-appear-done',
  [TransitionPhase.ENTER]: '-enter',
  [TransitionPhase.ENTER_ACTIVE]: '-enter-active',
  [TransitionPhase.ENTER_DONE]: '-enter-done',
  [TransitionPhase.EXIT]: '-exit',
  [TransitionPhase.EXIT_ACTIVE]: '-exit-active',
  [TransitionPhase.EXIT_DONE]: '-exit-done',
};

const appendSuffix = (className: string, suffix: string): string => `${className}${suffix}`;

const joinClassNames = (...classNames: (string | undefined)[]): string =>
  classNames.filter(className => !!className).join(' ');

const recoverClassName = (phase: TransitionPhase, classNames: CSSTransitionClassNames) =>
  typeof classNames === 'string' ? appendSuffix(classNames, SUFFIX[phase]) : classNames[phase];

const makeClassName = (phase: TransitionPhase, classNames: CSSTransitionClassNames) => {
  const className = recoverClassName(phase, classNames);
  switch (phase) {
    case TransitionPhase.APPEAR_ACTIVE:
      return joinClassNames(recoverClassName(TransitionPhase.APPEAR, classNames), className);
    case TransitionPhase.ENTER_ACTIVE:
      return joinClassNames(recoverClassName(TransitionPhase.ENTER, classNames), className);
    case TransitionPhase.EXIT_ACTIVE:
      return joinClassNames(recoverClassName(TransitionPhase.EXIT, classNames), className);
    default:
      return className;
  }
};

type CSSTransitionChildProps = Pick<CSSTransitionProps, 'children' | 'classNames'> & {
  phase: TransitionPhase;
};

const CSSTransitionChild = (props: CSSTransitionChildProps) => {
  const { children, classNames, phase } = props;
  const child = Children.only(children);
  const { className: childClassName } = child.props;

  const finalClassName = useMemo(
    () => joinClassNames(childClassName, makeClassName(phase, classNames)),
    [childClassName, classNames, phase],
  );

  return cloneElement(child, { className: finalClassName });
};

/**
 * The `CSSTransition` component applies CSS transitions based on the phase of a transition lifecycle.
 * It automatically manages the class names for each transition phase (e.g., "appear", "enter", "exit")
 * and applies them to the `children` element.
 */
export function CSSTransition(props: CSSTransitionProps) {
  const { children, classNames, ...rest } = props;
  return (
    <Transition {...rest}>
      {(state, phase) => <CSSTransitionChild {...{ children, classNames, phase }} />}
    </Transition>
  );
}
