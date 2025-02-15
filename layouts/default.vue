<template>
  <div>
    <header class="sticky top-0 shadow-lg z-50 backdrop-blur">
      <Menu />
    </header>
    <main class="relative">
      <div
        class="absolute inset-0 -z-10 transform-gpu blur-3xl overflow-hidden"
      >
        <div
          class="aspect-[1.7] h-full w-full bg-gradient-to-r from-teal-500 to-white/10 dark:to-black/10 opacity-50 lg:opacity-30 xs:opacity-50 hero-bg-effect"
        ></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-12">
        <slot />
      </div>
    </main>
  </div>
</template>
<style scoped>
.hero-bg-effect {
  clip-path: polygon(
    66% 56%,
    32% 5%,
    0% 8%,
    98% 77%,
    87% 65%,
    35% 62%,
    30% 78%,
    62% 58%,
    95% 87%,
    86% 106%,
    25% 42%,
    22% 1%,
    27% 39%,
    79% 38%,
    48% 110%,
    69% 81%
  );
}
</style>
