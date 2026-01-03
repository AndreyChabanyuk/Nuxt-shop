<template>
    <div class="select-wrapper">
        <select v-model="model" class="select">
            <option v-for="item in options" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
        <IconOption/>
    </div>
</template>
<script setup lang="ts">
import IconOption from '../icon/IconOption.vue'
import type { Category } from '~/interfaces/category.interface'
    const model = defineModel<string>()
    const { options } = defineProps<{
        options: Category[]
    }>()
  
</script>
<style lang="sass" scoped>
.select-wrapper
    position: relative

.select-wrapper svg
    position: absolute
    right: 24px
    top: 24px

.select
    appearance: none
    background-color: transparent
    border: 1px solid var(--color-grey)
    padding: 15px 12px
    margin: 0
    width: 100%
    font-family: inherit
</style>