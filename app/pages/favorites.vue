<template>
	<div class="catalog__grid">
		<CatalogCard
			v-for="product in products"
			:key="product.id"
			:product="product"
		/>
	</div>
</template>
<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface'

const favoriteStore = useFavoritesStore()
const products = ref<Product[]>()
const API_URL = useAPI()


watchEffect(async () => {
	if (Array.isArray(favoriteStore.favoriteIds)) {
		const data = await Promise.all(
			favoriteStore.favoriteIds.map(id => {
				return $fetch<{ product: Product }>(API_URL + '/products/' + id)
			})
		)
		products.value = data.map(el => el.product)
	}
})
</script>
<style lang="sass">
.catalog__grid
  display: grid
  width: 100%
  gap: 24px 12px
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))
</style>
