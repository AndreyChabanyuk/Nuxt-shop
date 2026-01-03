import { defineNuxtPlugin } from '#app'
import type { Pinia } from 'pinia'
import {createPersistedStatePlugin} from 'pinia-plugin-persistedstate-2'

export default defineNuxtPlugin(nuxtApp => {
  const pinia = nuxtApp.$pinia as Pinia
  
  pinia.use(
		createPersistedStatePlugin({
			storage: {
				getItem: key => {
					const cookie = document.cookie
						.split('; ')
						.find(row => row.startsWith(`${key}=`))
					return cookie ? cookie.split('=')[1] : null
				},
				setItem: (key, value) => {
					const expires = new Date()
					expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000) // срок жизни 7 дней
					document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`
				},
				removeItem: key => {
					document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
				},
			},
			paths: ['token'], // Указываем, что сохраняем только token
		})
	)
})