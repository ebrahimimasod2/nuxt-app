<template>
  <div class="flex h-screen bg-slate-950 overflow-hidden">
    <!-- Mobile Menu Button -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg text-white"
    >
      <Icon :name="sidebarOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="w-6 h-6" />
    </button>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out flex flex-col',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]"
    >
      <!-- Logo -->
      <div class="p-6 border-b border-slate-800">
        <NuxtLink to="/" class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">S</span>
          </div>
          <div>
            <h1 class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Shanbe Global
            </h1>
            <p class="text-xs text-slate-400">Intelligence Portal</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="sidebarOpen = false"
          class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group"
          :class="isActive(item.path) 
            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
            : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
        >
          <Icon :name="item.icon" class="w-5 h-5" />
          <span class="font-medium">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- Settings at Bottom -->
      <div class="p-4 border-t border-slate-800">
        <NuxtLink
          to="/settings"
          @click="sidebarOpen = false"
          class="flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-slate-300 hover:bg-slate-800 hover:text-white"
        >
          <Icon name="i-lucide-settings" class="w-5 h-5" />
          <span class="font-medium">Settings</span>
        </NuxtLink>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
    ></div>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto bg-slate-950">
      <slot />
    </main>
  </div>
</template>

<script setup>
const route = useRoute()
const sidebarOpen = ref(false)

const menuItems = [
  {
    label: 'News Pulse',
    icon: 'i-lucide-newspaper',
    path: '/'
  },
  {
    label: 'Agent Marketplace',
    icon: 'i-lucide-bot',
    path: '/agents'
  }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  sidebarOpen.value = false
})
</script>
