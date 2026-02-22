<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-white mb-2">Select an Intelligence Agent</h1>
      <p class="text-slate-400 text-lg">Choose a specialized AI agent to assist with your research and analysis</p>
    </div>

    <!-- Featured Agent Banner -->
    <div class="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-2xl p-8 mb-8">
      <div class="flex items-center space-x-4 mb-4">
        <div class="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center">
          <Icon name="i-lucide-sparkles" class="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-white">New: Multi-Agent Collaboration</h2>
          <p class="text-amber-400">Connect multiple agents for comprehensive analysis</p>
        </div>
      </div>
    </div>

    <!-- Agents Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="agent in agents"
        :key="agent.id"
        class="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group"
      >
        <!-- Agent Header -->
        <div class="p-6 border-b border-slate-800">
          <div class="flex items-start justify-between mb-4">
            <div :class="[
              'w-14 h-14 rounded-xl flex items-center justify-center',
              agent.color
            ]">
              <Icon :name="agent.icon" class="w-7 h-7 text-white" />
            </div>
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium',
                agent.status === 'online' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
              ]"
            >
              {{ agent.status === 'online' ? '● Online' : '○ Offline' }}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white mb-2">{{ agent.name }}</h3>
          <p class="text-slate-400 text-sm mb-4">{{ agent.description }}</p>

          <!-- Stats -->
          <div class="flex items-center space-x-4 text-sm">
            <div class="flex items-center space-x-1 text-slate-500">
              <Icon name="i-lucide-users" class="w-4 h-4" />
              <span>{{ agent.users }}</span>
            </div>
            <div class="flex items-center space-x-1 text-slate-500">
              <Icon name="i-lucide-star" class="w-4 h-4 text-amber-400" />
              <span class="text-amber-400">{{ agent.rating }}</span>
            </div>
          </div>
        </div>

        <!-- Agent Capabilities -->
        <div class="p-6 border-b border-slate-800">
          <h4 class="text-sm font-semibold text-slate-300 mb-3">Specializations</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in agent.skills"
              :key="skill"
              class="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="p-6">
          <div class="flex space-x-3">
            <UButton
              color="amber"
              class="flex-1"
              size="lg"
              @click="connectAgent(agent)"
            >
              <Icon name="i-lucide-message-circle" class="w-4 h-4 mr-2" />
              Chat Now
            </UButton>
            <UButton
              color="neutral"
              variant="outline"
              size="lg"
              @click="viewDetails(agent)"
            >
              <Icon name="i-lucide-info" class="w-4 h-4" />
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Modal -->
    <UModal v-model="chatModalOpen">
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-3">
            <div :class="[
              'w-12 h-12 rounded-xl flex items-center justify-center',
              selectedAgent?.color
            ]">
              <Icon :name="selectedAgent?.icon" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-white">{{ selectedAgent?.name }}</h3>
              <p class="text-sm text-slate-400">{{ selectedAgent?.status === 'online' ? 'Online' : 'Offline' }}</p>
            </div>
          </div>
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-x"
            @click="chatModalOpen = false"
          />
        </div>

        <!-- Chat Interface -->
        <div class="bg-slate-900 rounded-xl p-4 h-96 overflow-y-auto mb-4">
          <div class="space-y-4">
            <div class="flex justify-start">
              <div class="bg-slate-800 rounded-lg px-4 py-2 max-w-xs">
                <p class="text-sm text-white">Hello! I'm {{ selectedAgent?.name }}. How can I assist you today?</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex space-x-3">
          <UInput
            v-model="chatMessage"
            placeholder="Type your message..."
            class="flex-1"
            size="lg"
            @keyup.enter="sendMessage"
          />
          <UButton
            color="amber"
            size="lg"
            icon="i-lucide-send"
            @click="sendMessage"
          />
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

const agents = ref([
  {
    id: 1,
    name: 'The Generalist',
    description: 'Shanbe\'s main ecosystem guide with comprehensive knowledge of Iran\'s startup landscape.',
    icon: 'i-lucide-brain',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    status: 'online',
    users: '2.4K',
    rating: '4.9',
    skills: ['Market Analysis', 'Startup Discovery', 'Trend Forecasting', 'General Insights']
  },
  {
    id: 2,
    name: 'The Legal Bot',
    description: 'Specialist in Iranian startup law, regulations, and compliance requirements.',
    icon: 'i-lucide-scale',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    status: 'online',
    users: '1.8K',
    rating: '4.8',
    skills: ['Legal Compliance', 'Regulations', 'Contract Review', 'IP Rights']
  },
  {
    id: 3,
    name: 'The VC Scout',
    description: 'Finds and analyzes investment opportunities across all sectors in Iran.',
    icon: 'i-lucide-trending-up',
    color: 'bg-gradient-to-br from-green-500 to-green-600',
    status: 'online',
    users: '3.2K',
    rating: '4.9',
    skills: ['Deal Sourcing', 'Due Diligence', 'Valuation', 'Portfolio Analysis']
  },
  {
    id: 4,
    name: 'The Sector Analyst',
    description: 'Deep expertise in specific industry verticals and sector-specific insights.',
    icon: 'i-lucide-pie-chart',
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    status: 'online',
    users: '1.5K',
    rating: '4.7',
    skills: ['Sector Reports', 'Competitive Analysis', 'Market Sizing', 'Industry Trends']
  },
  {
    id: 5,
    name: 'The Data Scientist',
    description: 'Advanced analytics and data-driven insights for strategic decision making.',
    icon: 'i-lucide-bar-chart',
    color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    status: 'online',
    users: '980',
    rating: '4.8',
    skills: ['Predictive Analytics', 'Data Visualization', 'Statistical Analysis', 'ML Models']
  },
  {
    id: 6,
    name: 'The Network Mapper',
    description: 'Identifies connections, relationships, and networks within the ecosystem.',
    icon: 'i-lucide-network',
    color: 'bg-gradient-to-br from-pink-500 to-pink-600',
    status: 'online',
    users: '1.2K',
    rating: '4.6',
    skills: ['Network Analysis', 'Relationship Mapping', 'Influence Tracking', 'Collaboration']
  }
])

const connectAgent = (agent) => {
  selectedAgent.value = agent
  chatModalOpen.value = true
}

const viewDetails = (agent) => {
  // Navigate to agent details page or show more info
  console.log('View details for:', agent.name)
}

const sendMessage = () => {
  if (!chatMessage.value.trim()) return
  console.log('Sending message:', chatMessage.value)
  chatMessage.value = ''
}
</script>
