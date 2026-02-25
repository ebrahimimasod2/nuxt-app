<script setup>
const { locale, locales } = useI18n()

const currentLocaleInfo = computed(() => {
  return locales.value.find(l => l.code === locale.value) || { dir: 'ltr', code: 'en' }
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => currentLocaleInfo.value.dir
  }
})

const title = 'Shanbe Global Intelligence Portal'
const description = 'The Gateway to the Iranian Startup Ecosystem. Data-driven intelligence for Global Investors & Researchers.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/shanbe-og-image.png',
  twitterImage: '/shanbe-og-image.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
