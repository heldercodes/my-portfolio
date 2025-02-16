<script setup>
const { data } = await useFetch(
  "https://api.github.com/users/heldercodes/repos"
);

const projects = computed(() => {
  return data.value
    ? data.value
        .filter((repo) => repo.description)
        .map((repo) => ({
          id: repo.id,
          title: repo.name,
          description: repo.description,
          tags: [repo.language, ...repo.topics],
          github: repo.html_url,
          demo: repo.homepage,
          timestamp: Date.parse(repo.created_at),
        }))
        .sort((a, b) => b.timestamp - a.timestamp)
    : [];
});
</script>
<template>
  <section class="max-w-5xl mx-auto px-6 py-12 grid gap-6">
    <h1 class="text-4xl font-bold text-center">🚀 Projects</h1>
    <p class="text-center text-gray-500 dark:text-gray-400">
      A collection of projects I've worked on, ranging from web development to
      automation.
    </p>

    <div
      v-if="projects.length"
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
        :github="project.github"
        :demo="project.demo"
      />
    </div>
  </section>
</template>
