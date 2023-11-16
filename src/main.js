import '@/assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18nInstance from '/i18n'

const app = createApp(App)
app.use(i18nInstance)
app.mount('#app')
