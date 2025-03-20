<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 shadow-lg z-50 backdrop-blur">
      <Menu />
    </header>
    <main class="flex-grow relative">
      <div
        class="absolute inset-0 -z-10 transform-gpu blur-3xl overflow-hidden"
      >
        <div
          class="aspect-[1.7] h-full w-full bg-gradient-to-br from-teal-500 via-white/40 to-white/10 dark:via-gray-900/20 dark:to-black/30 opacity-60 lg:opacity-50 xs:opacity-60 hero-bg-effect"
        ></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-12">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
<style scoped>
.hero-bg-effect {
  clip-path: polygon(
    65% 50%,
    30% 5%,
    5% 12%,
    98% 77%,
    85% 60%,
    40% 55%,
    33% 75%,
    60% 52%,
    90% 88%,
    80% 105%,
    22% 45%,
    20% 5%,
    25% 38%,
    78% 40%,
    48% 108%,
    66% 79%
  );
}
</style>
