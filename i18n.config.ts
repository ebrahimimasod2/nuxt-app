export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: require('./locales/en.json'),
    fa: require('./locales/fa.json')
  }
}))
