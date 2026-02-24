<template>
  <div class="language-switcher">
    <button
      @click="toggleLocale"
      class="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
      :title="$t('general.language')"
    >
      <span class="text-2xl">{{ currentFlag }}</span>
      <span class="text-sm font-bold text-white">{{ currentLocaleName }}</span>
      <Icon name="i-lucide-chevron-down" class="w-4 h-4 text-white" />
    </button>
  </div>
</template>

<script setup>
const { locale, setLocale, locales } = useI18n()
const router = useRouter()
const route = useRoute()

const currentLocale = computed(() => locale.value)

const currentLocaleName = computed(() => {
  const loc = locales.value.find(l => l.code === locale.value)
  return loc?.name || locale.value.toUpperCase()
})

const currentFlag = computed(() => 
  locale.value === 'en' ? '🇬🇧' : '🇮🇷'
)

const alternateLocale = computed(() => 
  locale.value === 'en' ? 'fa' : 'en'
)

const toggleLocale = async () => {
  const newLocale = alternateLocale.value
  await setLocale(newLocale)
  
  // Force page reload to update all content
  window.location.reload()
}
</script>

<style scoped>
.language-switcher {
  display: block;
}
</style>
