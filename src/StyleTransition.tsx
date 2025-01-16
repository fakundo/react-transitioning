import { cloneElement, Children, useMemo } from 'react';
import { TransitionPhase, TransitionProps, Transition } from './Transition';

/**
 * Type representing styles for different transition phases.
 * `TransitionPhase` is the key representing different phases, and the value is a `React.CSSProperties` object.
 */
export type StyleTransitionStyles = {
  [key in TransitionPhase]?: React.CSSProperties;
};

export type StyleTransitionProps = Omit<TransitionProps, 'children'> & {
  /**
   * The child element to which the animation will be applied.
   * This should be a single React element that supports the `style` prop.
   * The `style` prop will be combined with the styles specified in the `styles` prop for the current transition phase.
   */
  children: React.ReactElement<{ style?: React.CSSProperties }>;

  /**
   * An object containing styles for different animation phases.
   * `TransitionPhase` indicates the animation phase, for which specific styles can be applied.
   * Each phase style is represented by a `React.CSSProperties` object.
   */
  styles: StyleTransitionStyles;
};

const makePhaseStyle = (phase: TransitionPhase, styles: StyleTransitionStyles) => {
  const style = styles[phase];
  switch (phase) {
    case TransitionPhase.APPEAR_ACTIVE:
      return { ...styles[TransitionPhase.APPEAR], ...style };
    case TransitionPhase.ENTER_ACTIVE:
      return { ...styles[TransitionPhase.ENTER], ...style };
    case TransitionPhase.EXIT_ACTIVE:
      return { ...styles[TransitionPhase.EXIT], ...style };
    default:
      return style;
  }
};

type StyleTransitionChildProps = Pick<StyleTransitionProps, 'children' | 'styles'> & {
  phase: TransitionPhase;
};

const StyleTransitionChild = (props: StyleTransitionChildProps) => {
  const { children, styles, phase } = props;
  const child = Children.only(children);
  const { style: childStyle } = child.props;

  const finalStyle = useMemo(
    () => ({ ...childStyle, ...makePhaseStyle(phase, styles) }),
    [childStyle, styles, phase],
  );

  return cloneElement(child, { style: finalStyle });
};

/**
 * The `StyleTransition` component allows you to animate the styles of a component across different
 * transition phases. It automatically manages the styles for each transition phase
 * (e.g., "appear", "enter", "exit") and applies them to the `children` element.
 */
export function StyleTransition(props: StyleTransitionProps) {
  const { children, styles, ...rest } = props;
  return (
    <Transition {...rest}>
      {(state, phase) => <StyleTransitionChild {...{ children, styles, phase }} />}
    </Transition>
  );
}
