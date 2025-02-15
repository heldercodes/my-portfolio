<script setup>
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <div class="inline-flex">
    <button @click="toggleMenu" class="md:hidden p-1 inline-flex">
      <Icon
        v-if="!menuOpen"
        name="line-md:close-to-menu-transition"
        class="w-5 h-5"
      />
      <Icon v-else name="line-md:menu-to-close-transition" class="w-5 h-5" />
    </button>
    <nav
      v-if="menuOpen"
      class="absolute inset-0 w-full bg-white dark:bg-background-dark shadow-md md:hidden flex flex-col space-y-4 py-6 px-6 nav-height"
    >
      <NuxtLink to="/" class="nav-link" @click="closeMenu">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link" @click="closeMenu">About</NuxtLink>
      <NuxtLink to="/projects" class="nav-link" @click="closeMenu"
        >Projects</NuxtLink
      >
      <NuxtLink to="/blog" class="nav-link" @click="closeMenu">Blog</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-height {
  top: 70px;
  height: calc(100vh - 70px);
}
</style>
