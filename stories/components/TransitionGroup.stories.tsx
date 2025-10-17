import { Meta, StoryObj } from '@storybook/react';
import { TransitionGroup } from 'react-transitioning';
import { FadeTransition } from '../misc/StyleFadeTransition';

const ITEMS = ['olive', 'green'];

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
      {ITEMS.map(item => (
        <FadeTransition key={item}>
          <div
            style={{
              width: 100,
              height: 100,
              background: item,
              verticalAlign: 'top',
              display: 'inline-block',
              transition: 'all 500ms',
            }}
          />
        </FadeTransition>
      ))}
    </TransitionGroup>
  ),
};

export default META;

export const Playground: StoryObj<typeof META> = {};
