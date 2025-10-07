<template>
	<div class="error__wrapper">
		<h1>{{ error.statusCode }} Ошибка</h1>
		<div v-if="error.statusCode === 404" class="error__message">
			Страница не найдена, попробуйте перейти<br> на главную страницу
		</div>
		<div v-else class="error__message">{{ error.statusMessage }}</div>
		<ActionButton @click="goHome" color="ghost" />
	</div>
</template>
<script lang="ts" setup>
import type { NuxtError } from '#app'

const { error } = defineProps<{
	error: NuxtError
}>()

function goHome(){
    navigateTo("/")
}

</script>
<style scoped lang="sass">

.error__wrapper
 display: flex
 flex-direction: column
 justify-content: center
 gap: 24px
 align-items: center
.error__message
 color: var(--color-grey)
 font-weight: 400
 font-size: 20px
 line-height: 26px
 text-align: center
 margin-bottom: 40px
</style>
