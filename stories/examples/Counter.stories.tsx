import { Meta, StoryObj } from '@storybook/react';
import { TransitionGroup } from 'react-transitioning';
import { useEffect, useState } from 'react';
import { FadeTransition } from '../misc/StyleFadeTransition';

const duration = 1000;

const META: Meta = {
  tags: ['!dev'],
  render: () => {
    const [sec, setSec] = useState(0);

    useEffect(() => {
      const i = setInterval(() => {
        setSec(prevSec => prevSec + 1);
      }, duration);
      return () => {
        clearInterval(i);
      };
    }, []);

    return (
      <TransitionGroup duration={duration}>
        <FadeTransition key={sec}>
          <div style={{ fontSize: 60, fontFamily: 'monospace' }}>{sec}</div>
        </FadeTransition>
      </TransitionGroup>
    );
  },
};

export default META;

export const Default: StoryObj<typeof META> = {};
