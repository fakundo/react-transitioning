import { useState, useEffect, useRef, useMemo } from 'react';
import { useIsoEffect } from './useIsoEffect';

/**
 * Enum representing the different phases of a transition.
 * Each phase corresponds to a specific stage of the transition lifecycle.
 */
export enum TransitionPhase {
  APPEAR = 'appear',
  APPEAR_ACTIVE = 'appearActive',
  APPEAR_DONE = 'appearDone',
  ENTER = 'enter',
  ENTER_ACTIVE = 'enterActive',
  ENTER_DONE = 'enterDone',
  EXIT = 'exit',
  EXIT_ACTIVE = 'exitActive',
  EXIT_DONE = 'exitDone',
}

/**
 * Enum representing event callbacks for various transition phases.
 */
export enum TransitionPhaseEvent {
  ENTER = 'onEnter',
  ENTERING = 'onEntering',
  ENTERED = 'onEntered',
  EXIT = 'onExit',
  EXITING = 'onExiting',
  EXITED = 'onExited',
}

/**
 * Type representing the state of each transition phase.
 * Each phase is associated with a boolean value indicating whether that phase is active.
 */
export type TransitionState = {
  [key in TransitionPhase]: boolean;
};

export type TransitionProps = {
  /**
   * Event callbacks for different transition phases.
   */
  [key in TransitionPhaseEvent]?: () => void;
} & {
  /**
   * If true, the component is shown and transitions through the "appear", "enter", or "exit" phases to the "entered" state.
   * If false, it transitions through the "exit" phases to the "exited" state.
   *
   * @default false
   */
  in?: boolean;

  /**
   * If true, the transition will run the "appear" phases ("appear", "appearActive", "appearDone") when the component is first mounted.
   *
   * @default false
   */
  appear?: boolean;

  /**
   * If true, enables the "enter" phases ("enter", "enterActive", "enterDone") when the component enters.
   *
   * @default true
   */
  enter?: boolean;

  /**
   * If true, enables the "exit" phases ("exit", "exitActive", "exitDone") when the component leaves.
   *
   * @default true
   */
  exit?: boolean;

  /**
   * Duration of the transition in milliseconds. Can be used to override default durations for the phases.
   *
   * @default 500
   */
  duration?: number;

  /**
   * If true, the component remains mounted in the DOM even when it transitions to the "exited" state.
   *
   * @default false
   */
  alwaysMounted?: boolean;

  /**
   * A function called to manually handle the end of a transition phase.
   *
   * @param phase - The current transition phase (e.g., "appear", "enter", "exit").
   * @param done - A callback function to signal that the phase is complete.
   */
  addEndListener?: (phase: TransitionPhase, done: () => void) => void;

  /**
   * A render function that provides the current transition state and active phase.
   *
   * @param transitionState - The current state of the transition, indicating which phase is active.
   * @param activePhase - The phase currently in progress (e.g., "appearActive", "enterDone").
   * @returns React nodes to render.
   */
  children: (transitionState: TransitionState, activePhase: TransitionPhase) => React.ReactNode;
};

const EVENT_MAP: {
  [key in TransitionPhase]: [TransitionPhaseEvent, TransitionPhase?, boolean?];
} = {
  [TransitionPhase.APPEAR]: [TransitionPhaseEvent.ENTER, TransitionPhase.APPEAR_ACTIVE],
  [TransitionPhase.APPEAR_ACTIVE]: [TransitionPhaseEvent.ENTERING, TransitionPhase.APPEAR_DONE, true],
  [TransitionPhase.APPEAR_DONE]: [TransitionPhaseEvent.ENTERED],
  [TransitionPhase.ENTER]: [TransitionPhaseEvent.ENTER, TransitionPhase.ENTER_ACTIVE],
  [TransitionPhase.ENTER_ACTIVE]: [TransitionPhaseEvent.ENTERING, TransitionPhase.ENTER_DONE, true],
  [TransitionPhase.ENTER_DONE]: [TransitionPhaseEvent.ENTERED],
  [TransitionPhase.EXIT]: [TransitionPhaseEvent.EXIT, TransitionPhase.EXIT_ACTIVE],
  [TransitionPhase.EXIT_ACTIVE]: [TransitionPhaseEvent.EXITING, TransitionPhase.EXIT_DONE, true],
  [TransitionPhase.EXIT_DONE]: [TransitionPhaseEvent.EXITED],
};

/**
 * The `Transition` component handles the animation lifecycle of a component as it enters and exits
 * the DOM. The component can manage transitions for different phases: "appear", "enter",
 * and "exit", with each phase having an active state and a done state. These phases can be triggered and
 * customized based on the visibility of the component (controlled by the `in` prop).
 */
export function Transition(props: TransitionProps) {
  const {
    children,
    in: inProp = false,
    appear = false,
    enter = true,
    exit = true,
    duration = 500,
    alwaysMounted = false,
    addEndListener,
  } = props;

  const tmRef = useRef<number>(0);
  let ignoreInPropChange = false;

  // Make phase state
  const [phase, setPhase] = useState(() => {
    ignoreInPropChange = true;
    if (!inProp) {
      return TransitionPhase.EXIT_DONE;
    }
    if (appear) {
      return TransitionPhase.APPEAR;
    }
    return TransitionPhase.APPEAR_DONE;
  });

  // Effect for phase change
  useEffect(() => {
    const { setTimeout, clearTimeout } = window;
    const [eventName, nextPhase, delay] = EVENT_MAP[phase];
    const { [eventName]: event } = props;
    event?.();
    if (nextPhase) {
      if (delay) {
        if (addEndListener) {
          addEndListener(phase, () => setPhase(nextPhase));
        } else {
          tmRef.current = setTimeout(setPhase, duration, nextPhase);
        }
      } else {
        tmRef.current = setTimeout(setPhase, 0, nextPhase);
      }
    }
    return () => {
      clearTimeout(tmRef.current);
    };
  }, [phase, duration]);

  // Effect for initial phase
  useIsoEffect(() => {
    if (!ignoreInPropChange) {
      if (inProp) {
        setPhase(enter ? TransitionPhase.ENTER : TransitionPhase.ENTER_DONE);
      } else {
        setPhase(exit ? TransitionPhase.EXIT : TransitionPhase.EXIT_DONE);
      }
    }
  }, [inProp]);

  // Make transition state
  const transitionState = useMemo(
    () =>
      Object.keys(EVENT_MAP).reduce(
        (acc, phaseI) => ({ ...acc, [phaseI]: phase === phaseI }),
        {} as TransitionState,
      ),
    [phase],
  );

  // Do not render anything
  if (!alwaysMounted && phase === TransitionPhase.EXIT_DONE) {
    return null;
  }

  // Render children
  return children(transitionState, phase);
}
