<template>
  <div class="min-h-screen bg-transparent">
    <!-- Hero Section with Agent -->
    <section class="relative py-20 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <!-- Headlines -->
        <div class="mb-12">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Gateway to the 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Iranian Startup Ecosystem
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Data-driven intelligence for Global Investors & Researchers
          </p>
        </div>

        <!-- Agent Interface -->
        <div class="mb-16">
          <ShanbeAgent />
        </div>
      </div>
    </section>

    <!-- Live Market Pulse -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Live Market Pulse
          </h2>
          <p class="text-lg text-gray-300">
            Real-time insights into Iran's startup ecosystem
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Total Startups Card -->
          <div class="shanbe-card rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="i-lucide-building-2" class="w-8 h-8 text-amber-400" />
            </div>
            <h3 class="text-3xl font-bold text-white mb-2">500+</h3>
            <p class="text-gray-300 text-lg">Total Startups Tracked</p>
            <div class="mt-4 flex items-center justify-center space-x-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="text-sm text-green-400">Live Data</span>
            </div>
          </div>

          <!-- Active Investors Card -->
          <div class="shanbe-card rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="i-lucide-users" class="w-8 h-8 text-amber-400" />
            </div>
            <h3 class="text-3xl font-bold text-white mb-2">45</h3>
            <p class="text-gray-300 text-lg">Active Investors</p>
            <div class="mt-4">
              <UButton color="amber" variant="outline" size="sm">
                View Network
              </UButton>
            </div>
          </div>

          <!-- Latest Report Card -->
          <div class="shanbe-card rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="i-lucide-file-text" class="w-8 h-8 text-amber-400" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">2024 Ecosystem</h3>
            <p class="text-gray-300 text-lg">Latest Report</p>
            <div class="mt-4">
              <UButton color="amber" size="sm">
                Download Report
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligence at Your Fingertips
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Comprehensive data and insights to make informed decisions in Iran's dynamic startup landscape
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-trending-up" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Market Analytics</h3>
            <p class="text-gray-300">
              Deep dive into funding trends, sector performance, and growth metrics across Iranian startups.
            </p>
          </div>

          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-network" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Investor Network</h3>
            <p class="text-gray-300">
              Connect with active investors and understand investment patterns in the Iranian ecosystem.
            </p>
          </div>

          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-search" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Smart Discovery</h3>
            <p class="text-gray-300">
              AI-powered search to find startups, sectors, and opportunities that match your criteria.
            </p>
          </div>

          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-globe" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Global Bridge</h3>
            <p class="text-gray-300">
              Facilitating connections between Iranian startups and international investors and partners.
            </p>
          </div>

          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-shield-check" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Verified Data</h3>
            <p class="text-gray-300">
              All information is verified and regularly updated to ensure accuracy and reliability.
            </p>
          </div>

          <div class="shanbe-card rounded-xl p-6">
            <Icon name="i-lucide-clock" class="w-10 h-10 text-amber-400 mb-4" />
            <h3 class="text-xl font-semibold text-white mb-3">Real-time Updates</h3>
            <p class="text-gray-300">
              Stay informed with live updates on funding rounds, new startups, and market developments.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="shanbe-card rounded-3xl p-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore Iran's Startup Ecosystem?
          </h2>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join investors, researchers, and entrepreneurs who trust Shanbe Intelligence for comprehensive market insights.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton color="amber" size="xl" class="px-8">
              Start Exploring
            </UButton>
            <UButton color="neutral" variant="outline" size="xl" class="px-8">
              Request Demo
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Shanbe Global Intelligence Portal - Iranian Startup Ecosystem Gateway',
  meta: [
    {
      name: 'description',
      content: 'The Gateway to the Iranian Startup Ecosystem. Data-driven intelligence for Global Investors & Researchers.'
    }
  ]
})
</script>
