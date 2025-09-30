<template>
    <div>
        <h1>{{ error.statusCode }}{{ error.statusMessage }}</h1>
    </div>
</template>
<script lang="ts" setup>
import type { NuxtError } from '#app'


const { error } = defineProps<{
    error: NuxtError
}>()

</script>
<style lang="">
    
</style>