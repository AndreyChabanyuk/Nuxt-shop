<template>
    <div>
        <div>Auth</div>
        <button @click="backToDefault">Обратно</button>
        <slot />
    </div>
</template>
<script setup lang="ts">
const backToDefault = () => {
    setPageLayout('default')
}
</script>
<style lang="">
    
</style>