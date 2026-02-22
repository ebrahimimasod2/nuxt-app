<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-white mb-2">Settings</h1>
      <p class="text-slate-400 text-lg">Manage your preferences and account settings</p>
    </div>

    <!-- Settings Sections -->
    <div class="max-w-4xl space-y-6">
      <!-- Profile Section -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h2 class="text-xl font-bold text-white mb-4">Profile Settings</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Display Name</label>
            <UInput placeholder="Your name" size="lg" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <UInput type="email" placeholder="your@email.com" size="lg" />
          </div>
        </div>
      </div>

      <!-- Preferences Section -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h2 class="text-xl font-bold text-white mb-4">Preferences</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-white font-medium">Email Notifications</p>
              <p class="text-sm text-slate-400">Receive updates about new articles</p>
            </div>
            <UToggle />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-white font-medium">Agent Recommendations</p>
              <p class="text-sm text-slate-400">Get personalized agent suggestions</p>
            </div>
            <UToggle />
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex justify-end">
        <UButton color="amber" size="lg">
          Save Changes
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
