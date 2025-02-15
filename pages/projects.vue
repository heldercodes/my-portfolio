<script setup>
// Static Placeholder Projects
const projects = [
  {
    id: 1,
    title: "Nuxt 3 Portfolio",
    description:
      "A fully responsive portfolio built with Nuxt 3, Tailwind, and Markdown support.",
    tags: ["Vue.js", "Nuxt.js", "TailwindCSS"],
    github: "https://github.com/heldercodes/nuxt-portfolio",
    demo: "https://heldercodes.dev",
  },
  {
    id: 2,
    title: "CI/CD Pipeline Automation",
    description:
      "A fully automated CI/CD pipeline using GitHub Actions and Docker.",
    tags: ["DevOps", "GitHub Actions", "Docker"],
    github: "https://github.com/heldercodes/cicd-pipeline",
    demo: "",
  },
  {
    id: 3,
    title: "Weather App with OpenWeather API",
    description: "A real-time weather app fetching data from OpenWeather API.",
    tags: ["Vue.js", "API", "Weather"],
    github: "https://github.com/heldercodes/weather-app",
    demo: "https://weather.heldercodes.dev",
  },
];
</script>
<template>
  <section class="max-w-5xl mx-auto px-6 py-12 grid gap-6">
    <!-- Page Title -->
    <h1 class="text-4xl font-bold text-center">🚀 Projects</h1>
    <p class="text-center text-gray-500 dark:text-gray-400">
      A collection of projects I've worked on, ranging from web development to
      automation.
    </p>

    <!-- Projects Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
