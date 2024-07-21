<script setup lang="ts">
const { frontmatter } = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>
