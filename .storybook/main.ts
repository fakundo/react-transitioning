import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-controls', '@storybook/addon-actions', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: false,
    disableWhatsNewNotifications: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  viteFinal: async config => {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },
};

export default config;
