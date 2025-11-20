<template>
	<div>
        <!-- <InputField v-model="input" variant="black" />
        <button @click="fetchData()">Отправить</button> -->
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <SelectField v-model="select" :options="allCategories" />
            </div>
            <div class="catalog__grid">
                <CatalogCard v-for="product in productsData?.products" :key="product.id" :product="product" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SelectField from '~/components/shared/SelectField.vue';
import CatalogCard from '~/components/shared/CatalogCard.vue';
import type { GetProductsResponse } from '~/interfaces/product.interface';
import type { GetCategoriesResponse } from '~/interfaces/category.interface'
const config = useRuntimeConfig()
const select = ref('Категории')

const API_URL = config.public.apiurl
const { data: productsData } = await useFetch<GetProductsResponse>( API_URL + '/products',{
    query: {
        limit: 20,
        offset: 0
    }
});
const { data: categoriesData } = await useFetch<GetCategoriesResponse>( API_URL + '/categories',{
});
const firstCategory = {id: 0, name: 'Категории', alias: 'category'}
const allCategories = computed(() => {
    return  [firstCategory, ...(categoriesData?.value?.categories ?? [])] 
})
</script>
<style scoped lang="sass">
.catalog 
  display: flex
  gap: 36px
.catalog__filter
  width: 260px

.catalog__grid
  display: grid
  width: 100%
  gap: 24px 12px
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
</style>
