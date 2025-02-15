<template>
  <section class="text-center py-5 md:py-32">
    <h1 class="text-5xl font-bold sm:text-7xl">
      Hi, I'm <span class="text-teal-500">Hélder Ferreira 👋</span>
    </h1>
    <p class="mt-6 text-lg">
      A passionate <span class="text-teal-500">Software Developer</span> and
      <span class="text-teal-500">DevOps Enthusiast</span> who loves automating
      things and exploring the latest in tech.<br />
      When I’m not knee-deep in code, I’m probably enjoying a good cup of ☕
      while tinkering with Linux systems. <br />
      Welcome to my little corner of the internet!
    </p>

    <div class="mt-10 flex flex-wrap gap-x-4 gap-y-3 justify-center">
      <NuxtLink to="/about" class="btn-primary space-x-2 min-w-44 justify-center">
        <Icon name="heroicons-outline:code" class="w-5 h-5 mr-2" /> About Me
      </NuxtLink>
      <NuxtLink to="/blog" class="btn-secondary space-x-2 min-w-44 justify-center">
        <Icon name="heroicons-outline:pencil-alt" class="w-5 h-5 mr-2" /> Read
        the Blog
      </NuxtLink>
    </div>
  </section>
</template>
