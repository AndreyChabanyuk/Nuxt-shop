<template>
    <input v-model="data" :class="[variant, 'input']" >
    
</template>
<script lang="ts" setup>
    const data = defineModel<string>()
    defineProps<{ variant?: "gray" | "black"}>()
</script>
<style lang="sass" scoped>
.input
  width: 100%
  background: none
  padding: 12px 0
  color: var(--color-black)
  outline: none     

.input::placeholder 
  color: var(--color-grey)
.gray 
  border-bottom: 1px solid var(--color-little-grey)

.black
  border-bottom: 1px solid var(--color-black)
  &:focus
    border: none

</style>