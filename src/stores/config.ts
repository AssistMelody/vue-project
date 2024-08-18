import { ref, computed, nextTick } from 'vue'
import { defineStore } from 'pinia'
import { I18n, loadLocaleMessages as loadLang } from '@/i18n'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useGlobalProfileStore = defineStore(
  'profile',
  () => {
    const theme = ref('light')
    const lang = ref('zh')
    const setTheme = (val: Boolean) => {
      theme.value = val ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', theme.value)
    }
    const loadLocaleMessages = async (locale: string) => {
      lang.value = locale
      I18n.global.locale.value = locale
      await loadLang(locale)
      return nextTick()
    }
    return { theme, lang, setTheme, loadLocaleMessages }
  },
  {
    persist: true
  }
)
