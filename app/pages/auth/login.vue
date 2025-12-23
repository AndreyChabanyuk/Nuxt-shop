<template>
	<div>
		<h1 class="login__title">Мой аккаунт</h1>
		<form class="login-form">
			<div class="fields">
				<InputField v-model="email" :variant="'gray'" placeholder="Email" />
				<InputField
					v-model="password"
					:variant="'gray'"
					placeholder="Password"
					type="password"
				/>
			</div>
			<div class="actions">
				<ActionButton :style="'button-auth'" @click.stop.prevent="login()"
					>Вход</ActionButton
				>
				<NuxtLink to="/auth/restore">Забыли пароль?</NuxtLink>
			</div>
		</form>
	</div>
</template>
<script lang="ts" setup>
import type { LoginResponse } from '~/interfaces/auth.interface'
import { useAuthStore } from '#imports'
const email = ref<string>()
const password = ref<string>()
const API_URL = useAPI()
const authStore = useAuthStore()



async function login() {
	try {
		console.log('go')
		const data = await $fetch<LoginResponse>(API_URL + '/auth/login', {
			method: 'POST',
			body: {
				email: email.value,
				password: password.value,
			},
		})
    authStore.setToken(data.token)
	if(authStore.token){
		navigateTo('/')
	}
	} catch (e) {
		console.log(e)
	}
}

</script>
<style lang="sass" scoped>
.login-form
  display: flex
  flex-direction: column
  max-width: 500px
  margin: 0 auto
  gap: 70px
.fields
  display: flex
  flex-direction: column
  gap: 46px
.login__title
  margin-bottom: 20px
.actions
  display: flex
  flex-direction: column
  gap: 13px
  align-items: center

.button-auth
  width: 100%

.actions a
  text-decoration: none
</style>
