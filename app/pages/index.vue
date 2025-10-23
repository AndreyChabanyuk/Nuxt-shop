<template>
    <div>
        главная
      <!--   <IconTwitter /> -->
        <nuxt-link to="/about">About</nuxt-link>
        <button @click="openAbout">Перейти</button>
        <InputField variant="black" placeholder="Введите имя"/>
    </div>
</template>
<script lang="ts" setup>
function openAbout() {
    setPageLayout('auth')
}


</script>
<style lang="sass">
    
</style>