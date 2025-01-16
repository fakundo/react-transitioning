import { useMemo } from 'react';
import { StyleTransition, StyleTransitionProps } from 'react-transitioning';

export type FadeTransitionProps = Omit<StyleTransitionProps, 'styles'>;

export function FadeTransition(props: FadeTransitionProps) {
  const { duration = 500 } = props;

  const styles = useMemo(
    () => ({
      appear: { opacity: 0 },
      appearActive: { opacity: 1, transition: `opacity ${duration}ms` },
      enter: { opacity: 0 },
      enterActive: { opacity: 1, transition: `opacity ${duration}ms` },
      exit: { opacity: 1 },
      exitActive: { opacity: 0, transition: `opacity ${duration}ms` },
      exitDone: { opacity: 0 },
    }),
    [duration],
  );

  return <StyleTransition {...props} styles={styles} />;
}
