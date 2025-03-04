<template>
  <div class="card">
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <p class="text-secondary-color mt-2">{{ description }}</p>
    <div class="tags mt-3">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="links mt-4 flex flex-wrap justify-center md:flex-nowrap gap-3">
      <NuxtLink :to="github" target="_blank" class="btn-secondary min-w-32 justify-center">
        <Icon name="line-md:github" class="w-5 h-5 mr-2" /> GitHub
      </NuxtLink>
      <NuxtLink v-if="demo" :to="demo" target="_blank" class="btn-primary min-w-32 justify-center">
        <Icon name="line-md:external-link" class="w-5 h-5 mr-2" /> Demo
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  github: String,
  demo: String,
});
</script>

<style scoped>
.links a {
  @apply flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300;
}
</style>
