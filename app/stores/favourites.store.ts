import { defineStore } from 'pinia'
import type { GetCategoriesResponse } from '~/interfaces/category.interface'

export const useFavoritesStore = defineStore('favorites', () => {
	const favoriteIds = ref<number[] | string>([])
	const addToFavorite = (id: number) => {
		if (Array.isArray(favoriteIds.value)) {
			if (!favoriteIds.value.includes(id)) {
				favoriteIds.value.push(id)
			}
		}
	}

	const toggleFavorite = (id: number) => {
		if (Array.isArray(favoriteIds.value)) {
			if (!favoriteIds.value.includes(id)) {
				favoriteIds.value.push(id)
				return 
			}
			favoriteIds.value = favoriteIds.value.filter(item => item != id)
		}
	}

	const isFavorite = (id: number) => {
		if(Array.isArray(favoriteIds.value)){
			return favoriteIds.value.find(f => f == id)
		}
	}

	const removeFromFavorite = (id: number) => {
		if (Array.isArray(favoriteIds.value)) {
			favoriteIds.value = favoriteIds.value.filter(item => item !== id)
		}
	}

	const fetchFavorites = async () => {
		const data = await $fetch<GetCategoriesResponse>(
			'http://localhost:3000/api/categories'
		)
		favoriteIds.value = data.categories.map(p => Number(p.id)).join(' ')
	}

	return {
		favoriteIds,
		addToFavorite,
		removeFromFavorite,
		fetchFavorites,
		toggleFavorite,
		isFavorite
	}
}, {
	persist: true
})
