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
    classNames: 'fade',
    children: <div style={{ width: 100, height: 100, background: 'olive' }} />,
    alwaysMounted: true,
  },
};

export default META;

export const Playground: StoryObj<typeof META> = {};
