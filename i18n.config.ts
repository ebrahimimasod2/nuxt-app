export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      sidebar: {
        dashboard: 'Market Pulse',
        agents: 'Agent Store',
        about: 'About Shanbe',
        contact: 'Contact Bridge'
      },
      general: {
        search_placeholder: 'Find an expert...',
        connect: 'Connect',
        language: 'Language'
      }
    },
    fa: {
      sidebar: {
        dashboard: 'نبض بازار',
        agents: 'بازار هوشمند',
        about: 'درباره شنبه',
        contact: 'پل ارتباطی'
      },
      general: {
        search_placeholder: 'جستجوی متخصص...',
        connect: 'اتصال',
        language: 'زبان'
      }
    }
  }
}))
