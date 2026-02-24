<template>
  <div class="min-h-screen p-6 lg:p-10">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-white mb-2">{{ $t('settings.title') }}</h1>
      <p class="text-slate-400 text-lg">{{ $t('settings.subtitle') }}</p>
    </div>

    <!-- Settings Sections -->
    <div class="max-w-4xl space-y-6">
      <!-- Profile Section -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('settings.profile_title') }}</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">{{ $t('settings.display_name') }}</label>
            <UInput :placeholder="$t('settings.display_name_placeholder')" size="lg" />
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">{{ $t('settings.email') }}</label>
            <UInput type="email" :placeholder="$t('settings.email_placeholder')" size="lg" />
          </div>
        </div>
      </div>

      <!-- Preferences Section -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('settings.preferences_title') }}</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-white font-medium">{{ $t('settings.email_notifications') }}</p>
              <p class="text-sm text-slate-400">{{ $t('settings.email_notifications_desc') }}</p>
            </div>
            <UToggle />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-white font-medium">{{ $t('settings.agent_recommendations') }}</p>
              <p class="text-sm text-slate-400">{{ $t('settings.agent_recommendations_desc') }}</p>
            </div>
            <UToggle />
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="flex justify-end">
        <UButton color="amber" size="lg">
          {{ $t('general.save_changes') }}
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
