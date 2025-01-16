import { Meta, StoryObj } from '@storybook/react';
import { TransitionGroup } from 'react-transitioning';
import { FadeTransition } from '../misc/StyleFadeTransition';

const META: Meta<typeof TransitionGroup> = {
  title: 'Components/TransitionGroup',
  component: TransitionGroup,
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
  args: {
    appear: true,
  },
  render: args => (
    <TransitionGroup {...args}>
      <FadeTransition>
        <div>Item 1</div>
      </FadeTransition>
      <FadeTransition>
        <div>Item 2</div>
      </FadeTransition>
    </TransitionGroup>
  ),
};

export default META;

export const Playground: StoryObj<typeof META> = {};
