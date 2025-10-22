import { Meta, StoryObj } from '@storybook/react';
import { CSSTransition } from 'react-transitioning';
import './CSSTransition.stories.css';

const META: Meta<typeof CSSTransition> = {
  title: 'Components/CSSTransition',
  component: CSSTransition,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
    classNames: { control: false },
  },
  args: {
    in: true,
    appear: true,
    children: (
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: '15%',
          background: 'linear-gradient(to bottom right, seagreen, teal)',
        }}
      />
    ),
    alwaysMounted: true,
    classNames: 'fade',
  },
};

export default META;

export const Playground: StoryObj<typeof META> = {};
