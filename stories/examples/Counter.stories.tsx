import { Meta, StoryObj } from '@storybook/react';
import { TransitionGroup } from 'react-transitioning';
import { useEffect, useState } from 'react';
import { FadeTransition } from '../misc/StyleFadeTransition';

const META: Meta = {
  tags: ['!dev'],
};

export default META;

export const Default: StoryObj<typeof META> = {
  render: () => {
    const [sec, setSec] = useState(0);

    useEffect(() => {
      const i = setInterval(() => {
        setSec(prevSec => prevSec + 1);
      }, 1000);
      return () => {
        clearInterval(i);
      };
    }, []);

    return (
      <TransitionGroup duration={1000}>
        <FadeTransition key={sec}>
          <pre style={{ fontSize: 60 }}>{sec}</pre>
        </FadeTransition>
      </TransitionGroup>
    );
  },
};
