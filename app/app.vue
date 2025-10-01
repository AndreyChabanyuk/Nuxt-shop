<template>
	<div>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
throw createError({
	statusCode: 401,
	statusMessage: 'Недоступна страница без авторизации',
	data: {
		userId: 1
	}
})
</script>
