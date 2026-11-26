import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { chatDemo } from './mock/chat'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    chatDemo,
  ],
  optimizeDeps: {
    // Compile Vue TSX during dependency pre-bundling, including the chat package.
    rolldownOptions: {
      plugins: [vueJsx()],
    },
    include: [
      '@chengjian/foundation-web-chat',
      'raf',
      'classnames',
      'clipboard',
      'highlight.js',
      'dayjs',
      'dayjs/locale/zh-cn',
      'dayjs/plugin/advancedFormat',
      'dayjs/plugin/customParseFormat',
      'dayjs/plugin/isBetween',
      'dayjs/plugin/isLeapYear',
      'dayjs/plugin/isoWeek',
      'dayjs/plugin/isoWeeksInYear',
      'dayjs/plugin/localeData',
      'dayjs/plugin/quarterOfYear',
      'dayjs/plugin/weekOfYear',
      'dayjs/plugin/weekYear',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
