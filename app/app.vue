<template>
	<div>
			<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
const config = useAppConfig()
const runtime = useRuntimeConfig()
const hi = ref(runtime.public.apiurl)

onMounted(() => {
	alert('mounted')
})
</script>
