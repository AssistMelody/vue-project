import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { I18n } from './i18n'

import App from './App.vue'
import router from './router'
import { useGlobalProfileStore } from '@/stores/config'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(I18n)

const profile = useGlobalProfileStore()
document.documentElement.setAttribute('data-theme', profile.theme)
profile.loadLocaleMessages(profile.lang).then(() => {
  app.mount('#app')
})
