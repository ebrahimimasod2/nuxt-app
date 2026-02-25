<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-navy-900 mb-2">{{ $t('home.title') }}</h1>
      <p class="text-gray-600 text-lg">{{ $t('home.subtitle') }}</p>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-1 font-medium">{{ $t('home.total_articles') }}</p>
            <p class="text-4xl font-bold text-navy-900">{{ totalArticles }}</p>
          </div>
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="i-lucide-file-text" class="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-1 font-medium">{{ $t('home.last_updated') }}</p>
            <p class="text-2xl font-bold text-navy-900">2 {{ $t('home.hours_ago') }}</p>
          </div>
          <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="i-lucide-clock" class="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-1 font-medium">{{ $t('home.active_sources') }}</p>
            <p class="text-4xl font-bold text-navy-900">12</p>
          </div>
          <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="i-lucide-rss" class="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </div>

    <!-- Search Bar -->
    <div class="mb-6">
      <div class="relative">
        <Icon name="i-lucide-search" class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="$t('home.search_articles')"
          class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
          @input="handleSearch"
        />
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="text-center">
        <Icon name="i-lucide-loader-2" class="w-12 h-12 text-amber-600 animate-spin mx-auto mb-4" />
        <p class="text-gray-600">{{ $t('home.loading_articles') }}</p>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="newsArticles.length === 0" class="text-center py-20">
      <Icon name="i-lucide-file-search" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <p class="text-gray-600 text-lg">{{ $t('home.no_results') }}</p>
    </div>

    <!-- News Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="article in newsArticles"
        :key="article.id"
        :href="article.link"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1"
      >
        <div class="p-6">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in article.tags"
              :key="tag"
              :class="getTagColor(tag)"
              class="px-3 py-1 rounded-full text-xs font-semibold"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">
            {{ article.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-gray-600 mb-4 line-clamp-3">
            {{ article.excerpt }}
          </p>

          <!-- Meta -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2 text-gray-500">
              <Icon name="i-lucide-calendar" class="w-4 h-4" />
              <span>{{ article.date }}</span>
            </div>
          </div>
        </div>

        <!-- Read More Footer -->
        <div class="px-6 py-3 bg-gray-50 border-t border-gray-100 group-hover:bg-amber-50 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600 group-hover:text-amber-600 font-medium">{{ $t('home.read_full_article') }}</span>
            <Icon name="i-lucide-arrow-right" class="w-4 h-4 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </div>

    <!-- Pagination -->
    <div v-if="!loading && totalPages > 1" class="mt-8 flex justify-center items-center gap-4">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {{ $t('home.previous') }}
      </button>
      
      <span class="text-gray-600">
        {{ $t('home.page') }} {{ currentPage }} / {{ totalPages }}
      </span>
      
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {{ $t('home.next') }}
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const { locale } = useI18n()
const newsArticles = ref([])
const loading = ref(false)
const currentPage = ref(1)
const totalPages = ref(1)
const totalArticles = ref(0)
const searchQuery = ref('')
const perPage = 9

let searchTimeout = null

const getApiUrl = () => {
  return locale.value === 'fa' 
    ? 'https://shanbemag.com/wp-json/wp/v2/posts'
    : 'http://en.shanbemag.com/wp-json/wp/v2/posts'
}

const fetchArticles = async () => {
  loading.value = true
  try {
    const params = new URLSearchParams({
      page: currentPage.value.toString(),
      per_page: perPage.toString(),
      _embed: '1'
    })

    if (searchQuery.value) {
      params.append('search', searchQuery.value)
    }

    const response = await fetch(`${getApiUrl()}?${params}`)
    const data = await response.json()
    
    totalArticles.value = parseInt(response.headers.get('X-WP-Total') || '0')
    totalPages.value = parseInt(response.headers.get('X-WP-TotalPages') || '1')

    newsArticles.value = data.map(post => ({
      id: post.id,
      title: post.title.rendered.replace(/<[^>]*>/g, ''),
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
      link: post.link,
      date: new Date(post.date).toLocaleDateString(locale.value === 'fa' ? 'fa-IR' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      tags: post._embedded?.['wp:term']?.[1]?.slice(0, 3).map(tag => tag.name) || []
    }))
  } catch (error) {
    console.error('Error fetching articles:', error)
    newsArticles.value = []
  } finally {
    loading.value = false
  }
}

const changePage = (page) => {
  currentPage.value = page
  fetchArticles()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    currentPage.value = 1
    fetchArticles()
  }, 500)
}

watch(locale, () => {
  currentPage.value = 1
  searchQuery.value = ''
  fetchArticles()
})

onMounted(() => {
  fetchArticles()
})

const getTagColor = (tag) => {
  const colors = {
    'Investment': 'bg-green-100 text-green-700',
    'Regulation': 'bg-blue-100 text-blue-700',
    'Tech': 'bg-purple-100 text-purple-700',
    'Fintech': 'bg-amber-100 text-amber-700',
    'Healthcare': 'bg-red-100 text-red-700',
    'E-commerce': 'bg-indigo-100 text-indigo-700',
    'AI': 'bg-cyan-100 text-cyan-700',
    'Policy': 'bg-gray-100 text-gray-700',
    'Funding': 'bg-emerald-100 text-emerald-700',
    'CleanTech': 'bg-lime-100 text-lime-700',
    'Accelerator': 'bg-orange-100 text-orange-700',
    'Sustainability': 'bg-teal-100 text-teal-700',
    'Expansion': 'bg-pink-100 text-pink-700',
    'International': 'bg-violet-100 text-violet-700',
    'IPO': 'bg-yellow-100 text-yellow-700',
    'Milestone': 'bg-fuchsia-100 text-fuchsia-700'
  }
  return colors[tag] || 'bg-gray-100 text-gray-700'
}
</script>
