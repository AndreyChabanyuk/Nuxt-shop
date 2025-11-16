<template>
	<NuxtLayout>
		<main class="main">
			<NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
		</main>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import '~/assets/styles/main.css'
</script>

<style scoped lang="sass">
.page-enter-active,
.page-leave-active
  transition: all 0.5s


.main
  margin: 0 auto
  max-width: 1248px
  padding: 40px 0


.page-enter-from,
.page-leave-to
  opacity: 0
</style>
