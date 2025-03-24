<template>
  <section class="max-w-5xl mx-auto px-6 py-12 grid gap-6">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center">📖 Blog</h1>
    <p class="text-center text-secondary-color">
      Sharing ideas, tutorials, and insights on development, automation, and
      more.
    </p>

    <!-- Blog Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard
        v-for="article in articles"
        :key="article.path"
        :title="article.title"
        :description="article.description"
        :tags="article.meta.tags"
        :image="article.meta.image"
        :readingTime="article.meta.readingTime"
        :to="article.path"
      />
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);
</script>
