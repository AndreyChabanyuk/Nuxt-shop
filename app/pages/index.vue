<template>
    <div>
        главная
        <nuxt-link to="/about">About</nuxt-link>
        <button @click="openAbout">Перейти</button>
    </div>
</template>
<script lang="ts" setup>
function openAbout() {
    navigateTo("/about")
}
</script>
<style lang="sass">
    
</style>