import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'

export const SUPPORT_LOCALES = ['en', 'ja']

export const I18n = createI18n({
  fallbackLocale: 'en',
  legacy: false
})

export async function loadLocaleMessages(locale: string) {
  // load locale messages with dynamic import
  const messages = await import(`@/assets/lang/${locale}.json`)

  // set locale and locale message
  I18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}
