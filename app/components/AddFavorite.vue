<template>
    <button v-show="isShown || favoriteStore.isFavorite(id)" class="fav-button" @click.stop.prevent="() => favoriteStore.toggleFavorite(id)">
        <Icon name="icons:icon-favorite" size="18px"/>
    </button>
</template>

<script setup lang="ts">
    const favoriteStore = useFavoritesStore()
    const {id, isShown} = defineProps<{
        id: number;
        isShown: boolean
    }>()
</script>

<style scoped lang="sass">
.fav-button
    background: none
    border: none
    cursor: pointer
</style>