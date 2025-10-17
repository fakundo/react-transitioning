import { Meta, StoryObj } from '@storybook/react';
import { StyleTransition } from 'react-transitioning';

const DURATION = 500;

const META: Meta<typeof StyleTransition> = {
  title: 'Components/StyleTransition',
  component: StyleTransition,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    styles: { control: false },
  },
  args: {
    in: true,
    appear: true,
    styles: {
      appear: { opacity: 0 },
      appearActive: { opacity: 1 },
      enter: { opacity: 0 },
      enterActive: { opacity: 1 },
      exit: { opacity: 1 },
      exitActive: { opacity: 0 },
      exitDone: { opacity: 0 },
    },
    children: (
      <div
        style={{
          width: 100,
          height: 100,
          background: 'olive',
          transition: `all ${DURATION}ms`,
        }}
      />
    ),
    alwaysMounted: true,
    duration: DURATION,
  },
};

export default META;

export const Playground: StoryObj<typeof META> = {};
