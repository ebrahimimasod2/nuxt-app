<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-white mb-2">Live Ecosystem Updates</h1>
      <p class="text-slate-400 text-lg">Real-time news and insights from Iran's startup ecosystem</p>
    </div>

    <!-- Stats Bar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-slate-400 text-sm mb-1">Total Articles</p>
            <p class="text-3xl font-bold text-white">{{ newsArticles.length }}</p>
          </div>
          <div class="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
            <Icon name="i-lucide-file-text" class="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>

      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-slate-400 text-sm mb-1">Last Updated</p>
            <p class="text-xl font-semibold text-white">2 hours ago</p>
          </div>
          <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
            <Icon name="i-lucide-clock" class="w-6 h-6 text-green-400" />
          </div>
        </div>
      </div>

      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-slate-400 text-sm mb-1">Active Sources</p>
            <p class="text-3xl font-bold text-white">12</p>
          </div>
          <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
            <Icon name="i-lucide-rss" class="w-6 h-6 text-blue-400" />
          </div>
        </div>
      </div>
    </div>

    <!-- News Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="article in newsArticles"
        :key="article.id"
        class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group cursor-pointer"
      >
        <div class="p-6">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in article.tags"
              :key="tag"
              :class="getTagColor(tag)"
              class="px-3 py-1 rounded-full text-xs font-medium"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
            {{ article.title }}
          </h3>

          <!-- Excerpt -->
          <p class="text-slate-400 mb-4 line-clamp-3">
            {{ article.excerpt }}
          </p>

          <!-- Meta -->
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center space-x-2 text-slate-500">
              <Icon name="i-lucide-calendar" class="w-4 h-4" />
              <span>{{ article.date }}</span>
            </div>
            <div class="flex items-center space-x-2 text-slate-500">
              <Icon name="i-lucide-eye" class="w-4 h-4" />
              <span>{{ article.views }}</span>
            </div>
          </div>
        </div>

        <!-- Read More Footer -->
        <div class="px-6 py-3 bg-slate-800/50 border-t border-slate-800 group-hover:bg-amber-500/10 transition-colors">
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-400 group-hover:text-amber-400">Read full article</span>
            <Icon name="i-lucide-arrow-right" class="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-transform" />
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
    'Investment': 'bg-green-500/10 text-green-400 border border-green-500/20',
    'Regulation': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    'Tech': 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    'Fintech': 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    'Healthcare': 'bg-red-500/10 text-red-400 border border-red-500/20',
    'E-commerce': 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20',
    'AI': 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    'Policy': 'bg-slate-500/10 text-slate-400 border border-slate-500/20',
    'Funding': 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    'CleanTech': 'bg-lime-500/10 text-lime-400 border border-lime-500/20',
    'Accelerator': 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    'Sustainability': 'bg-teal-500/10 text-teal-400 border border-teal-500/20',
    'Expansion': 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    'International': 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    'IPO': 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    'Milestone': 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20'
  }
  return colors[tag] || 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
}
</script>
