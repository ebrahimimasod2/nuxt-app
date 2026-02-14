<template>
  <div class="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-3">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <h3 class="text-lg font-semibold text-white">Shanbe Intelligence Agent</h3>
      </div>
      <div class="flex space-x-2">
        <UButton
          v-for="role in roles"
          :key="role"
          :variant="selectedRole === role ? 'solid' : 'outline'"
          :color="selectedRole === role ? 'amber' : 'neutral'"
          size="xs"
          @click="selectedRole = role"
        >
          {{ role }}
        </UButton>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="bg-slate-900/50 rounded-xl p-4 h-80 overflow-y-auto mb-4 space-y-4">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[
          'flex',
          message.sender === 'user' ? 'justify-end' : 'justify-start'
        ]"
      >
        <div
          :class="[
            'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
            message.sender === 'user'
              ? 'bg-amber-600 text-white'
              : 'bg-slate-700 text-gray-100'
          ]"
        >
          <p class="text-sm">{{ message.text }}</p>
          <span class="text-xs opacity-70">{{ formatTime(message.timestamp) }}</span>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="flex space-x-3">
      <UInput
        v-model="currentMessage"
        placeholder="Ask about startups, sectors, or market insights..."
        class="flex-1"
        size="lg"
        @keyup.enter="sendMessage"
        :disabled="isLoading"
      />
      <UButton
        @click="sendMessage"
        :loading="isLoading"
        color="amber"
        size="lg"
        icon="i-lucide-send"
      >
        Send
      </UButton>
    </div>
  </div>
</template>

<script setup>
const roles = ['Investor', 'Researcher', 'Startup']
const selectedRole = ref('Investor')
const currentMessage = ref('')
const isLoading = ref(false)
const messages = ref([
  {
    id: 1,
    sender: 'agent',
    text: 'Hello. I am the Shanbe Analyst. How can I assist you today?',
    timestamp: new Date()
  }
])

const { data: mockData } = await $fetch('/api/mockData')

const sendMessage = async () => {
  if (!currentMessage.value.trim() || isLoading.value) return

  const userMessage = {
    id: Date.now(),
    sender: 'user',
    text: currentMessage.value,
    timestamp: new Date()
  }

  messages.value.push(userMessage)
  const query = currentMessage.value.toLowerCase()
  currentMessage.value = ''
  isLoading.value = true

  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  let response = ''

  if (query.includes('fintech')) {
    const fintechStartups = mockData.startups.filter(s => s.sector.toLowerCase() === 'fintech')
    response = `I found ${fintechStartups.length} active Fintech startup${fintechStartups.length > 1 ? 's' : ''} in Iran. Top companies: ${fintechStartups.map(s => s.name).join(', ')}.`
  } else if (query.includes('healthcare') || query.includes('medtech')) {
    const healthStartups = mockData.startups.filter(s => s.sector.toLowerCase().includes('health'))
    response = `I found ${healthStartups.length} healthcare startup${healthStartups.length > 1 ? 's' : ''}: ${healthStartups.map(s => s.name).join(', ')}.`
  } else if (query.includes('total') || query.includes('count')) {
    response = `Currently tracking ${mockData.startups.length} active startups across various sectors in Iran.`
  } else if (query.includes('sectors') || query.includes('industries')) {
    const sectors = [...new Set(mockData.startups.map(s => s.sector))]
    response = `Active sectors include: ${sectors.join(', ')}. Which sector interests you most?`
  } else if (query.includes('tehran')) {
    const tehranStartups = mockData.startups.filter(s => s.location === 'Tehran')
    response = `${tehranStartups.length} startups are based in Tehran: ${tehranStartups.map(s => s.name).join(', ')}.`
  } else {
    response = `I understand you're interested in "${query}". I can help you with startup data, sector analysis, funding information, and market insights. Try asking about specific sectors like "Fintech" or "Healthcare".`
  }

  const agentMessage = {
    id: Date.now() + 1,
    sender: 'agent',
    text: response,
    timestamp: new Date()
  }

  messages.value.push(agentMessage)
  isLoading.value = false
}

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>