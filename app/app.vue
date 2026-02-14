<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
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
  <UApp class="shanbe-gradient min-h-screen">
    <UHeader class="bg-navy-900/80 backdrop-blur-sm border-b border-white/10">
      <template #left>
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">S</span>
          </div>
          <span class="text-white font-semibold text-lg">Shanbe Intelligence</span>
        </NuxtLink>
      </template>

      <template #right>
        <UButton
          color="amber"
          variant="outline"
          size="sm"
        >
          Contact Us
        </UButton>
        
        <UButton
          to="https://github.com/shanbe-intelligence"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain class="bg-transparent">
      <NuxtPage />
    </UMain>

    <USeparator class="border-white/10" />

    <UFooter class="bg-navy-900/50 backdrop-blur-sm border-t border-white/10">
      <template #left>
        <p class="text-sm text-gray-300">
          Shanbe Global Intelligence Portal • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <div class="flex space-x-4">
          <UButton
            color="neutral"
            variant="ghost"
            size="sm"
          >
            Privacy Policy
          </UButton>
          <UButton
            color="neutral"
            variant="ghost"
            size="sm"
          >
            Terms of Service
          </UButton>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
