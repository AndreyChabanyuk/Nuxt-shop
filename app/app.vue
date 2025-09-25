<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
onMounted(() => {
  console.log('First pull request')
})
</script>
