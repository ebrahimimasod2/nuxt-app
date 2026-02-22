<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-navy-900 mb-4">About Shanbe Global</h1>
        <p class="text-xl text-gray-600">Building bridges between Iran's innovation ecosystem and the world</p>
      </div>

      <!-- Mission Statement -->
      <div class="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
            <Icon name="i-lucide-target" class="w-8 h-8 text-white" />
          </div>
          <h2 class="text-3xl font-bold text-navy-900">Our Mission</h2>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed mb-4">
          Shanbe Global Intelligence Portal serves as the definitive gateway to Iran's dynamic startup ecosystem. We provide data-driven intelligence, AI-powered insights, and trusted connections that empower global investors, researchers, and entrepreneurs to discover opportunities and build meaningful partnerships.
        </p>
        <p class="text-lg text-gray-700 leading-relaxed">
          Our platform bridges the information gap, offering transparent, verified, and actionable intelligence about one of the world's most promising yet underexplored innovation landscapes.
        </p>
      </div>
    </div>

    <!-- Values Grid -->
    <div class="max-w-6xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-navy-900 text-center mb-12">Our Core Values</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Icon name="i-lucide-shield-check" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-3">Trust & Transparency</h3>
          <p class="text-gray-600">
            Every data point is verified. Every insight is backed by research. We build trust through transparency and accuracy.
          </p>
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Icon name="i-lucide-globe" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-3">Global Bridge</h3>
          <p class="text-gray-600">
            We connect Iranian innovation with international opportunities, fostering collaboration across borders and cultures.
          </p>
        </div>

        <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
            <Icon name="i-lucide-zap" class="w-7 h-7 text-white" />
          </div>
          <h3 class="text-xl font-bold text-navy-900 mb-3">Innovation First</h3>
          <p class="text-gray-600">
            Powered by cutting-edge AI and data science, we deliver insights that drive informed decision-making.
          </p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="max-w-6xl mx-auto mb-16">
      <div class="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 shadow-2xl">
        <h2 class="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <p class="text-5xl font-bold text-amber-400 mb-2">500+</p>
            <p class="text-gray-300">Startups Tracked</p>
          </div>
          <div class="text-center">
            <p class="text-5xl font-bold text-amber-400 mb-2">45</p>
            <p class="text-gray-300">Active Investors</p>
          </div>
          <div class="text-center">
            <p class="text-5xl font-bold text-amber-400 mb-2">12</p>
            <p class="text-gray-300">Industry Sectors</p>
          </div>
          <div class="text-center">
            <p class="text-5xl font-bold text-amber-400 mb-2">$2B+</p>
            <p class="text-gray-300">Total Funding</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-3xl font-bold text-navy-900 text-center mb-12">Why Choose Shanbe?</h2>
      <div class="space-y-6">
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="i-lucide-check-circle" class="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-navy-900 mb-2">Verified Intelligence</h3>
            <p class="text-gray-600">All data is cross-referenced, verified, and regularly updated by our research team.</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="i-lucide-bot" class="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-navy-900 mb-2">AI-Powered Insights</h3>
            <p class="text-gray-600">Our specialized AI agents provide instant, intelligent analysis tailored to your needs.</p>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-start space-x-4">
          <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="i-lucide-users" class="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 class="text-lg font-bold text-navy-900 mb-2">Trusted Network</h3>
            <p class="text-gray-600">Join a community of leading investors, researchers, and entrepreneurs.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-12 text-center border border-amber-200 shadow-lg">
        <h2 class="text-3xl font-bold text-navy-900 mb-4">Ready to Explore?</h2>
        <p class="text-lg text-gray-700 mb-8">
          Discover opportunities in Iran's thriving startup ecosystem today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/agents">
            <button class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
              Try Our AI Agents
            </button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="bg-white hover:bg-gray-50 text-navy-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg border border-gray-200">
              Contact Us
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'About Shanbe Global - Bridging Iran\'s Startup Ecosystem',
  meta: [
    {
      name: 'description',
      content: 'Learn about Shanbe Global\'s mission to connect Iran\'s innovation ecosystem with global opportunities through AI-powered intelligence.'
    }
  ]
})
</script>