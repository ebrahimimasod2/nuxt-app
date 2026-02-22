<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-navy-900 mb-2">Agent Store</h1>
      <p class="text-gray-600 text-lg">Choose a specialized AI agent to assist with your research and analysis</p>
    </div>

    <!-- Search Bar -->
    <div class="mb-8 max-w-2xl">
      <div class="relative">
        <Icon name="i-lucide-search" class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Find an expert..."
          class="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-navy-900 placeholder-gray-400"
        />
      </div>
    </div>

    <!-- Featured Banner -->
    <div class="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-8 mb-8 shadow-lg">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
          <Icon name="i-lucide-sparkles" class="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-navy-900">Premium AI Agents</h2>
          <p class="text-gray-700">Powered by advanced intelligence for the Iranian startup ecosystem</p>
        </div>
      </div>
    </div>

    <!-- Agents Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="agent in filteredAgents"
        :key="agent.id"
        class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:-translate-y-1"
      >
        <!-- Agent Header -->
        <div class="p-6 border-b border-gray-100">
          <div class="flex items-start justify-between mb-4">
            <div :class="[
              'w-16 h-16 rounded-xl flex items-center justify-center shadow-lg',
              agent.color
            ]">
              <Icon :name="agent.icon" class="w-8 h-8 text-white" />
            </div>
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-bold',
                agent.badge.color
              ]"
            >
              {{ agent.badge.text }}
            </span>
          </div>

          <h3 class="text-2xl font-bold text-navy-900 mb-2 group-hover:text-amber-600 transition-colors">
            {{ agent.name }}
          </h3>
          <p class="text-gray-600 text-sm mb-4">{{ agent.description }}</p>

          <!-- Stats -->
          <div class="flex items-center space-x-4 text-sm">
            <div class="flex items-center space-x-1 text-gray-500">
              <Icon name="i-lucide-users" class="w-4 h-4" />
              <span class="font-medium">{{ agent.users }}</span>
            </div>
            <div class="flex items-center space-x-1">
              <Icon name="i-lucide-star" class="w-4 h-4 text-amber-500" />
              <span class="text-amber-600 font-bold">{{ agent.rating }}</span>
            </div>
            <div class="flex items-center space-x-1">
              <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span class="text-green-600 font-medium text-xs">Online</span>
            </div>
          </div>
        </div>

        <!-- Agent Capabilities -->
        <div class="p-6 border-b border-gray-100 bg-gray-50">
          <h4 class="text-sm font-bold text-navy-900 mb-3">Specializations</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in agent.skills"
              :key="skill"
              class="px-3 py-1 bg-white text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Action Button -->
        <div class="p-6">
          <button
            @click="connectAgent(agent)"
            class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Icon name="i-lucide-message-circle" class="w-5 h-5" />
            <span>Try Agent</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Chat Modal -->
    <UModal v-model="chatModalOpen" :ui="{ width: 'max-w-3xl' }">
      <div class="p-6">
        <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <div :class="[
              'w-14 h-14 rounded-xl flex items-center justify-center shadow-lg',
              selectedAgent?.color
            ]">
              <Icon :name="selectedAgent?.icon" class="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-navy-900">{{ selectedAgent?.name }}</h3>
              <p class="text-sm text-gray-600">{{ selectedAgent?.badge.text }} Specialist</p>
            </div>
          </div>
          <button
            @click="chatModalOpen = false"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon name="i-lucide-x" class="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <!-- Chat Interface -->
        <div class="bg-gray-50 rounded-xl p-4 h-96 overflow-y-auto mb-4 border border-gray-200">
          <div class="space-y-4">
            <div class="flex justify-start">
              <div class="bg-white rounded-xl px-4 py-3 max-w-xs shadow-md border border-gray-200">
                <p class="text-sm text-navy-900 font-medium">Hello! I'm {{ selectedAgent?.name }}. How can I assist you today?</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-3">
          <input
            v-model="chatMessage"
            placeholder="Type your message..."
            class="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            @keyup.enter="sendMessage"
          />
          <button
            @click="sendMessage"
            class="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg"
          >
            <Icon name="i-lucide-send" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </UModal>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const chatModalOpen = ref(false)
const selectedAgent = ref(null)
const chatMessage = ref('')
const searchQuery = ref('')

const agents = ref([
  {
    id: 1,
    name: 'Investment Scout',
    description: 'Finds and analyzes investment opportunities across all sectors in Iran.',
    icon: 'i-lucide-trending-up',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    badge: { text: 'Finance', color: 'bg-green-100 text-green-700' },
    users: '3.2K',
    rating: '4.9',
    skills: ['Deal Sourcing', 'Due Diligence', 'Valuation', 'Portfolio Analysis']
  },
  {
    id: 2,
    name: 'Legal Advisor',
    description: 'Specialist in Iranian startup law, regulations, and compliance requirements.',
    icon: 'i-lucide-scale',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    badge: { text: 'Legal', color: 'bg-blue-100 text-blue-700' },
    users: '1.8K',
    rating: '4.8',
    skills: ['Legal Compliance', 'Regulations', 'Contract Review', 'IP Rights']
  },
  {
    id: 3,
    name: 'Market Analyst',
    description: 'Comprehensive knowledge of Iran\'s startup landscape and market trends.',
    icon: 'i-lucide-brain',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    badge: { text: 'Research', color: 'bg-purple-100 text-purple-700' },
    users: '2.4K',
    rating: '4.9',
    skills: ['Market Analysis', 'Startup Discovery', 'Trend Forecasting', 'Insights']
  },
  {
    id: 4,
    name: 'Sector Expert',
    description: 'Deep expertise in specific industry verticals and sector-specific insights.',
    icon: 'i-lucide-pie-chart',
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    badge: { text: 'Industry', color: 'bg-amber-100 text-amber-700' },
    users: '1.5K',
    rating: '4.7',
    skills: ['Sector Reports', 'Competitive Analysis', 'Market Sizing', 'Trends']
  },
  {
    id: 5,
    name: 'Data Scientist',
    description: 'Advanced analytics and data-driven insights for strategic decision making.',
    icon: 'i-lucide-bar-chart',
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    badge: { text: 'Analytics', color: 'bg-cyan-100 text-cyan-700' },
    users: '980',
    rating: '4.8',
    skills: ['Predictive Analytics', 'Data Visualization', 'Statistics', 'ML Models']
  },
  {
    id: 6,
    name: 'Network Connector',
    description: 'Identifies connections, relationships, and networks within the ecosystem.',
    icon: 'i-lucide-network',
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    badge: { text: 'Networking', color: 'bg-pink-100 text-pink-700' },
    users: '1.2K',
    rating: '4.6',
    skills: ['Network Analysis', 'Relationship Mapping', 'Influence', 'Collaboration']
  }
])

const filteredAgents = computed(() => {
  if (!searchQuery.value) return agents.value
  
  const query = searchQuery.value.toLowerCase()
  return agents.value.filter(agent => 
    agent.name.toLowerCase().includes(query) ||
    agent.description.toLowerCase().includes(query) ||
    agent.badge.text.toLowerCase().includes(query) ||
    agent.skills.some(skill => skill.toLowerCase().includes(query))
  )
})

const connectAgent = (agent) => {
  selectedAgent.value = agent
  chatModalOpen.value = true
}

const sendMessage = () => {
  if (!chatMessage.value.trim()) return
  console.log('Sending message:', chatMessage.value)
  chatMessage.value = ''
}
</script>