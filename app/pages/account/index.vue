<template>
    <div>
      Account
      <NuxtLink href="/" @click="authStore.clearToken">Выход</NuxtLink>
    </div>
</template>
<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
const authStore = useAuthStore()
</script>
<style lang="sass">
    
</style>