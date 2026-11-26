import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import 'tdesign-vue-next/es/style/index.css'
// import '@chengjian/ui-web/theme'
import '@chengjian/foundation-web/style.css';
import '@chengjian/foundation-web/theme';
import '@chengjian/foundation-web-chat/style';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
