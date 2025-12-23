<template>
    <div class="flex">
        главная
      <!--   <IconTwitter /> -->
        
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