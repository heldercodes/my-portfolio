<template>
  <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 class="text-xl font-bold text-teal-500">
      <NuxtLink to="/">
        <Logo class="w-32 h-auto" />
      </NuxtLink>
    </h1>
    <ul class="hidden md:flex space-x-6">
      <li><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
      <li>
        <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
      </li>
      <li><NuxtLink to="/blog" class="nav-link">Blog</NuxtLink></li>
    </ul>
    <div class="inline-flex p-1 items-center">
      <ClientOnly>
        <ColorModeSelector />
        <template #fallback>
          <!-- Just to prevent a small CLS -->
          <span style="height: 28px; width: 28px">&nbsp;</span>
        </template>
      </ClientOnly>
      <SocialLinks />
      <MobileMenu />
    </div>
  </nav>
</template>
