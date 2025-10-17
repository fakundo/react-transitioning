import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Transition } from 'react-transitioning';

const META: Meta<typeof Transition> = {
  title: 'Components/Transition',
  component: Transition,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
  args: {
    in: true,
    appear: true,
    alwaysMounted: true,
    children: transitionState => <pre>{JSON.stringify(transitionState, null, '  ')}</pre>,
    onEnter: fn(),
    onEntering: fn(),
    onEntered: fn(),
    onExit: fn(),
    onExiting: fn(),
    onExited: fn(),
  },
};

export default META;

export const Playground: StoryObj<typeof META> = {};
