// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        dir: 'ltr',
        file: 'en.json'
      },
      {
        code: 'fa',
        name: 'فارسی',
        dir: 'rtl',
        file: 'fa.json'
      }
    ],
    lazy: true,
    langDir: './locales',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      cookieSecure: false,
      cookieCrossOrigin: false,
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },
  
  ssr: false,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
