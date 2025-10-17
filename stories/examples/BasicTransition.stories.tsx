import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Transition } from 'react-transitioning';

const META: Meta = {
  tags: ['!dev'],
};

export default META;

export const Default: StoryObj<typeof META> = {
  render: () => {
    const [visible, setVisible] = useState(true);
    const [alwaysMounted, setAlwaysMounted] = useState(true);
    const toggleVisibility = () => setVisible(!visible);
    const toggleAlwaysMounted = () => setAlwaysMounted(!alwaysMounted);
    return (
      <>
        <button onClick={toggleVisibility} type="button">
          Toggle visibility
        </button>
        <label>
          <input type="checkbox" checked={alwaysMounted} onChange={toggleAlwaysMounted} />
          Always mounted
        </label>
        <hr />
        <Transition in={visible} alwaysMounted={alwaysMounted}>
          {transitionState => <pre>{JSON.stringify(transitionState, null, '  ')}</pre>}
        </Transition>
      </>
    );
  },
};
