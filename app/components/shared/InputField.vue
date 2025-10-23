<template>
    <input v-model="data" class="input" :class="variant"  >
</template>
<script lang="ts" setup>
    const data = defineModel<string>()
    defineProps<{ variant?: "gray" | "black"}>()
</script>
<style lang="sass" scoped>
.input
  background: none
  padding: 12px 0
  border: none
  color: var(--color-black)


.input::placeholder 
  color: var(--color-grey)
.gray 
  border-bottom: 1px solid var(--color-little-grey)

.black
  border-bottom: 1px solid var(--color-black)
  &:focus
    border: none

</style>