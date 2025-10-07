<template>
    <div>
        {{id}} {{ alias }}
    </div>
</template>
<script lang="ts" setup>

const route = useRoute()

const id = ref(route.params.id)
const alias = ref(route.params.alias)

</script>
<style lang="">
    
</style>