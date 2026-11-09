import { defineConfig } from 'astro/config';

// Registers /design-system in `astro dev` only, so it never reaches dist/.
const devDesignSystem = {
  name: 'dev-design-system',
  hooks: {
    'astro:config:setup': ({ command, injectRoute }) => {
      if (command !== 'dev') return;
      injectRoute({ pattern: '/design-system', entrypoint: './src/dev/design-system.astro' });
    },
  },
};

export default defineConfig({
  site: 'https://damiansimpkins.com',
  integrations: [devDesignSystem],
});
