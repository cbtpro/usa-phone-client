import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ConfigProvider } from 'vant'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueClick from 'vue-click'

import '@/assets/webfont/font.css'

// 引入vant toast样式，否则命令调用方式无法显示
import 'vant/es/notify/style'

import App from './App.vue'
import router from './router'


const app = createApp(App)

const pinia = createPinia()
/**
 * pinia持久化方案 pinia-plugin-persistedstate
 * https://prazdevs.github.io/pinia-plugin-persistedstate/guide/
 */
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

app.use(VueClick)

app.use(ConfigProvider)

app.mount('#app')
