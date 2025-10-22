import { Meta, StoryObj } from '@storybook/react';
import { TransitionGroup } from 'react-transitioning';
import { FadeTransition } from '../misc/StyleFadeTransition';

const ITEMS = [
  'linear-gradient(to bottom right, seagreen, teal)',
  'linear-gradient(to bottom right, blueviolet, cornflowerblue)',
];

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
    <div
      style={{
        display: 'flex',
        gap: '.25rem',
      }}
    >
      <TransitionGroup {...args}>
        {ITEMS.map(item => (
          <FadeTransition key={item}>
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: '15%',
                background: item,
              }}
            />
          </FadeTransition>
        ))}
      </TransitionGroup>
    </div>
  ),
};

export default META;

export const Playground: StoryObj<typeof META> = {};
