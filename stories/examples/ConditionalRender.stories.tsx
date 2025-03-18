import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TransitionGroup } from 'react-transitioning';
import { FadeTransition } from '../misc/StyleFadeTransition';

const META: Meta = {
  tags: ['!dev'],
  render: () => {
    const [showFirstItem, setShowFirstItem] = useState(true);
    const [showSecondItem, setShowSecondItem] = useState(true);
    const [showThirdItem, setShowThirdItem] = useState(true);

    const toggleFirstItem = () => setShowFirstItem(!showFirstItem);
    const toggleSecondItem = () => setShowSecondItem(!showSecondItem);
    const toggleThirdItem = () => setShowThirdItem(!showThirdItem);

    return (
      <>
        <button onClick={toggleFirstItem} type="button">
          Toggle first item
        </button>
        <button onClick={toggleSecondItem} type="button">
          Toggle second item
        </button>
        <button onClick={toggleThirdItem} type="button">
          Toggle third item
        </button>
        <hr />
        <TransitionGroup>
          {showFirstItem && (
            <FadeTransition>
              <pre>FIRST ITEM</pre>
            </FadeTransition>
          )}
          {showSecondItem && (
            <FadeTransition>
              <pre>SECOND ITEM</pre>
            </FadeTransition>
          )}
          {showThirdItem && (
            <FadeTransition>
              <pre>THIRD ITEM</pre>
            </FadeTransition>
          )}
        </TransitionGroup>
      </>
    );
  },
};

export default META;

export const Default: StoryObj<typeof META> = {};
