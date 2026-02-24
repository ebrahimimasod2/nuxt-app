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
            <p class="text-4xl font-bold text-navy-900">{{ newsArticles.length }}</p>
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

    <!-- News Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="article in newsArticles"
        :key="article.id"
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
            <div class="flex items-center space-x-2 text-gray-500">
              <Icon name="i-lucide-eye" class="w-4 h-4" />
              <span>{{ article.views }}</span>
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
      </article>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const newsArticles = ref([
  {
    id: 1,
    title: 'Digikala Enters IPO Talks with Tehran Stock Exchange',
    excerpt: 'Iran\'s largest e-commerce platform is preparing for a historic public offering that could value the company at over $2 billion, marking a significant milestone for the country\'s tech sector.',
    tags: ['Investment', 'E-commerce', 'IPO'],
    date: 'Feb 20, 2026',
    views: '2.4K'
  },
  {
    id: 2,
    title: 'New AI Regulation Framework Announced in Tehran',
    excerpt: 'The Iranian government has unveiled comprehensive AI governance guidelines aimed at fostering innovation while ensuring ethical development of artificial intelligence technologies.',
    tags: ['Regulation', 'AI', 'Policy'],
    date: 'Feb 19, 2026',
    views: '1.8K'
  },
  {
    id: 3,
    title: 'Fintech Startup Raises $5M Series A',
    excerpt: 'TehranPay secures significant funding from regional investors to expand its digital payment infrastructure across Iran and neighboring markets.',
    tags: ['Investment', 'Fintech', 'Funding'],
    date: 'Feb 18, 2026',
    views: '3.1K'
  },
  {
    id: 4,
    title: 'Iranian Healthtech Platform Reaches 1M Users',
    excerpt: 'MedConnect, a telemedicine platform, celebrates a major milestone as it connects patients with healthcare providers across rural and urban areas.',
    tags: ['Healthcare', 'Tech', 'Milestone'],
    date: 'Feb 17, 2026',
    views: '1.5K'
  },
  {
    id: 5,
    title: 'New Accelerator Program Launches for CleanTech Startups',
    excerpt: 'Tehran Innovation Hub announces a specialized program focused on sustainable energy and environmental technology ventures with $10M in funding.',
    tags: ['CleanTech', 'Accelerator', 'Sustainability'],
    date: 'Feb 16, 2026',
    views: '980'
  },
  {
    id: 6,
    title: 'Cross-Border E-commerce Platform Expands to 5 Countries',
    excerpt: 'PersianMarket successfully launches operations in neighboring countries, facilitating trade and creating new opportunities for Iranian merchants.',
    tags: ['E-commerce', 'Expansion', 'International'],
    date: 'Feb 15, 2026',
    views: '2.2K'
  }
])

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
