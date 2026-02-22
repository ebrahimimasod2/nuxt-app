<template>
  <div class="min-h-screen p-6 lg:p-10">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-navy-900 mb-4">Contact Bridge</h1>
        <p class="text-xl text-gray-600">Connect with us to explore opportunities in Iran's startup ecosystem</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <Icon name="i-lucide-send" class="w-6 h-6 text-white" />
            </div>
            <h2 class="text-2xl font-bold text-navy-900">Request Access</h2>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Full Name *</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="John Doe"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Email Address *</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="john@company.com"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <!-- Organization -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Organization *</label>
              <input
                v-model="form.organization"
                type="text"
                required
                placeholder="Your Company Name"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <!-- Role -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Your Role *</label>
              <select
                v-model="form.role"
                required
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select your role</option>
                <option value="investor">Investor / VC</option>
                <option value="researcher">Researcher / Analyst</option>
                <option value="entrepreneur">Entrepreneur / Founder</option>
                <option value="corporate">Corporate / Strategic</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Interest -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Area of Interest</label>
              <div class="space-y-2">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" v-model="form.interests" value="investment" class="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" />
                  <span class="text-gray-700">Investment Opportunities</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" v-model="form.interests" value="research" class="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" />
                  <span class="text-gray-700">Market Research</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" v-model="form.interests" value="partnership" class="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" />
                  <span class="text-gray-700">Strategic Partnerships</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" v-model="form.interests" value="data" class="w-4 h-4 text-amber-600 rounded focus:ring-amber-500" />
                  <span class="text-gray-700">Data & Analytics</span>
                </label>
              </div>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-bold text-navy-900 mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us about your interests and how we can help..."
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Request</span>
              <span v-else>Sending...</span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <div class="flex items-center space-x-2">
              <Icon name="i-lucide-check-circle" class="w-5 h-5 text-green-600" />
              <p class="text-green-700 font-medium">Thank you! We'll be in touch soon.</p>
            </div>
          </div>
        </div>

        <!-- Contact Info & FAQ -->
        <div class="space-y-6">
          <!-- Contact Information -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 class="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
            
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-lucide-mail" class="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p class="font-bold text-navy-900">Email</p>
                  <p class="text-gray-600">contact@shanbeglobal.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-lucide-phone" class="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p class="font-bold text-navy-900">Phone</p>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="i-lucide-map-pin" class="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p class="font-bold text-navy-900">Location</p>
                  <p class="text-gray-600">Global Operations</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Info -->
          <div class="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
            <h3 class="text-xl font-bold text-navy-900 mb-4">Why Connect With Us?</h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-2">
                <Icon name="i-lucide-check" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Access to verified startup data</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-lucide-check" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">AI-powered market insights</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-lucide-check" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Direct connections to founders</span>
              </li>
              <li class="flex items-start space-x-2">
                <Icon name="i-lucide-check" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <span class="text-gray-700">Custom research reports</span>
              </li>
            </ul>
          </div>

          <!-- Response Time -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="i-lucide-clock" class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="font-bold text-navy-900">Quick Response</p>
                <p class="text-sm text-gray-600">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const form = ref({
  name: '',
  email: '',
  organization: '',
  role: '',
  interests: [],
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', form.value)
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Reset form
  setTimeout(() => {
    form.value = {
      name: '',
      email: '',
      organization: '',
      role: '',
      interests: [],
      message: ''
    }
    showSuccess.value = false
  }, 3000)
}

useHead({
  title: 'Contact Shanbe Global - Request Access',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Shanbe Global to explore investment opportunities and partnerships in Iran\'s startup ecosystem.'
    }
  ]
})
</script>