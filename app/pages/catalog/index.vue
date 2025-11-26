<template>
	<div>
        <!-- <InputField v-model="input" variant="black" />
        <button @click="fetchData()">Отправить</button> -->
        <h1 class="left">Каталог товаров</h1>
        <div class="catalog">
            <div class="catalog__filter">
                <div class="catalog__search">
                    <InputField v-model="search" variant="gray" placeholder="Поиск..."/>
                    <Icon name="icons:search" size="18px"/>
                </div>
                <SelectField v-model="category_id" :options="allCategories" />
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
import { useDebounceFn } from '@vueuse/core'
const config = useRuntimeConfig()
const API_URL = config.public.apiurl
const route = useRoute()
const category_id = ref("")
const search = ref("")
const query = computed(() => ({
    limit: route.query.limit ?? 20,
    offset: route.query.offset ?? 0,
    category_id: route.query.category_id || undefined,
    search: route.query.search
}
))
const router = useRouter()

const changeRoute = useDebounceFn((category_id, search) => {
   if (!category_id.value && !search.value) {
        router.replace({ query: {} })
    } else {
        router.replace({
            query: {
                ...(category_id.value && { category_id: category_id.value }),
                ...(search.value && { search: search.value })
            }
        })
    }
}, 200)

watch([category_id, search], () => {
    changeRoute(category_id, search)
})


const { data: productsData } = await useFetch<GetProductsResponse>( API_URL + '/products',{
    query
});
const { data: categoriesData } = await useFetch<GetCategoriesResponse>(API_URL + '/categories',{
});
const firstCategory = {id: "", name: 'Категории', alias: 'category'}
const allCategories = computed(() => {
    return  [firstCategory, ...(categoriesData?.value?.categories ?? [])] 
})
</script>
<style scoped lang="sass">
.left
  margin-bottom: 30px
.catalog 
  display: flex
  gap: 36px
.catalog__filter
  width: 260px
  display: flex
  flex-direction: column
  gap: 24px

.catalog__grid
  display: grid
  width: 100%
  gap: 24px 12px
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))

.catalog__search
    position: relative
.catalog__search .iconify
    position: absolute
    top: 12px
    right: 5px
</style>
