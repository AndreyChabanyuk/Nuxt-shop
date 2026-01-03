export const useAuthStore = defineStore(
	'auth',
	() => {
		const token = ref<string | undefined>()
		function setToken(value: string) {
			token.value = value
		}
		function clearToken() {
			token.value = undefined
		}
		return { token, setToken, clearToken }
	},
	{
		persist: {
			enabled: true, // Включаем сохранение состояния
			strategies: [
				{
					key: 'auth', // Ключ в cookies
					// Это работает, но будем использовать кастомное хранилище для cookies
					paths: ['token'], // Сохраняем только token
				},
			],
		},
	}
)