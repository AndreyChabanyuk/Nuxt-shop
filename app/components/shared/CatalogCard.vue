<template>
	<NuxtLink class="card" :to="`/catalog/${product.id}`">
		<div
			class="card__image"
			:style="{
			  	background: `url(${IMAGE_URL}${product.images[0]}) lightgray 50% / cover no-repeat`,
			}">
			<span class="card__discount">-{{ product.discount }}%</span>
		</div>
		<div class="card__name">
			{{ product.name }}
		</div>
		<div class="card__price">${{ product.price }}</div>
	</NuxtLink>
</template>
<script setup lang="ts">
import type { Product } from '~/interfaces/product.interface'

const config = useRuntimeConfig()
const IMAGE_URL = config.public.imageurl
console.log(config.public.apiurl)
console.log(IMAGE_URL)
defineProps<{product: Product}>()
</script>
<style lang="sass" scoped>
.card 
    display: flex
    flex-direction: column
    gap: 24px
    width: 100%
    text-decoration: none

.card__image
    aspect-ratio: 1/1
    border-radius: 8px
    min-width: 320px
    width: 100%
    padding: 16px

.card__price
    font-size: 20px
    font-weight: 500
    line-height: 26px
    color: var(--color-accent)

.card__discount
   background: var(--color-accent)
   border-radius: 4px
   color: var(--color-white-light)
   padding: 2px 8px
   font-size: 12px
</style>
