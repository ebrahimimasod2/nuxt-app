<template>
  <div class="flex h-screen bg-gray-50 overflow-hidden">
    <!-- Mobile Menu Button -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg text-navy-900"
    >
      <Icon :name="sidebarOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
    </button>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed lg:static inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col shadow-xl',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Logo -->
      <div class="p-6 border-b border-gray-200">
        <NuxtLink to="/" class="flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Shanbe Global" 
            class="w-32 h-auto"
            @error="handleImageError"
          />
        </NuxtLink>
        <p class="text-center text-xs text-gray-500 mt-3 font-medium">
          AI Agent Marketplace for Iranian Startups
        </p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="sidebarOpen = false"
          class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group"
          :class="isActive(item.path) 
            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-navy-900'"
        >
          <Icon :name="item.icon" class="w-5 h-5" />
          <span class="font-semibold">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Footer Info -->
      <div class="p-4 border-t border-gray-200 bg-gray-50">
        <div class="text-center">
          <p class="text-xs text-gray-500 mb-2">Trusted by</p>
          <p class="text-2xl font-bold text-navy-900">500+</p>
          <p class="text-xs text-gray-600">Startups & Investors</p>
        </div>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
    ></div>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto bg-gray-50">
      <slot />
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const sidebarOpen = ref(false)

const menuItems = [
  {
    label: 'Market Pulse',
    icon: 'i-lucide-bar-chart-3',
    path: '/'
  },
  {
    label: 'Agent Store',
    icon: 'i-lucide-bot',
    path: '/agents'
  },
  {
    label: 'About Shanbe',
    icon: 'i-lucide-building-2',
    path: '/about'
  },
  {
    label: 'Contact Bridge',
    icon: 'i-lucide-phone',
    path: '/contact'
  }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const handleImageError = (e) => {
  // Fallback if logo.png doesn't exist
  e.target.style.display = 'none'
  e.target.parentElement.innerHTML = `
    <div class="text-center">
      <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
        <span class="text-white font-bold text-3xl">S</span>
      </div>
      <h1 class="text-xl font-bold text-navy-900">Shanbe Global</h1>
    </div>
  `
}

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  sidebarOpen.value = false
})
</script>
