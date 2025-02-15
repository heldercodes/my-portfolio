<template>
  <NuxtLink :to="to" class="card">
    <img
      v-if="image"
      :src="image"
      alt=""
      class="rounded-t-lg h-40 w-full object-cover"
    />
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <p class="text-secondary mt-2">{{ description }}</p>
      <div class="tags mt-3">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="mt-4 text-sm text-gray-400">⏱ {{ readingTime }} min read</div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  tags: Array,
  image: String,
  readingTime: Number,
  to: String,
});
</script>

<style scoped>
/* .tags .tag {
  @apply inline-block px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 mr-2 mt-2;
} */
</style>
