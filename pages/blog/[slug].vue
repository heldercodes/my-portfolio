<template>
  <article class="max-w-3xl mx-auto px-6 py-12 prose dark:prose-invert prose-pre:bg-white prose-pre:text-gray-700">
    <NuxtLink to="/blog" class="inline-block mb-8 text-secondary-color hover:text-primary-color">← Back to Blog</NuxtLink>
    <template v-if="page">
      <div class="mt-4">
        <ContentRenderer :value="page" />
      </div>
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </article>
</template>

<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("content").path(route.path).first()
);
</script> 