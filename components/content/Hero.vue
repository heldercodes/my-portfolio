<template>
  <section class="text-center md:py-32">
    <h1 class="text-5xl font-bold sm:text-7xl">
      Hi, I'm <span class="text-teal-500">Hélder Ferreira 👋</span>
    </h1>
    <p class="mt-8 text-lg">
      Welcome to my little corner of the internet!<br />
      A passionate <span class="text-teal-500">Software Developer</span> and
      all-around <span class="text-teal-500">Problem Solver</span>, dedicated to
      automating the mundane and diving headfirst into the latest tech. <br />
      When I'm not knee-deep in code, you'll find me sipping a fine cup of ☕
      and tweaking Linux systems for fun. Welcome to my cozy corner of the
      internet—pull up a chair, stretch your legs, or just hover
      awkwardly—whatever makes you comfortable! 😊 Stay awhile!
    </p>

    <div class="mt-12 md:mt-16 flex flex-wrap gap-x-4 gap-y-4 justify-center">
      <NuxtLink
        to="/about"
        class="btn-primary space-x-2 min-w-44 justify-center"
      >
        <Icon name="heroicons-outline:code" class="w-5 h-5 mr-2" /> About Me
      </NuxtLink>
      <NuxtLink
        to="/blog"
        class="btn-secondary space-x-2 min-w-44 justify-center"
      >
        <Icon name="heroicons-outline:pencil-alt" class="w-5 h-5 mr-2" /> Read
        the Blog
      </NuxtLink>
    </div>
  </section>
</template>
