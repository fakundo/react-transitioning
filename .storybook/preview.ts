import type { Preview } from '@storybook/react';
import theme from './theme';
import './preview.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: theme,
    },
    darkMode: {
      current: 'dark',
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Components',
          ['Transition', 'StyleTransition', 'CSSTransition'],
          'Examples',
          ['Basic Transition', 'Fade Transition', ['Inline Styles']],
        ],
      },
    },
  },
};

export default preview;
