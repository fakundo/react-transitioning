import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FadeTransition } from '../misc/StyleFadeTransition';

const META: Meta = {
  tags: ['!dev'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => {
    const [visible, setVisible] = useState(true);
    return (
      <>
        <button onClick={() => setVisible(!visible)} type="button">
          Toggle visibility
        </button>
        <hr />
        <FadeTransition in={visible} alwaysMounted>
          <div style={{ width: 100, height: 100, background: 'olive' }} />
        </FadeTransition>
      </>
    );
  },
};

export default META;

export const Default: StoryObj<typeof META> = {};
