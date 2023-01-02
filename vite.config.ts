
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  plugins: [sveltekit()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      '$components': path.resolve('./src/components'),
    }
  }
};

export default config;
