import { defineConfig, Plugin } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { contextUtils } from './src/utils/utils';


export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context: contextUtils
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
        signup: resolve(__dirname, 'src/pages/register/register.html'),
        profile: resolve(__dirname, 'src/pages/profile/profile.html'),
        error: resolve(__dirname, 'src/pages/500/500.html'),
        notFound: resolve(__dirname, 'src/pages/404/404.html'),
      }
    }
  },
  server: {
    open: '/src/pages/login/login.html'
  },

});
