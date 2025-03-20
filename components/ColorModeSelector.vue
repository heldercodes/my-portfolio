<script setup lang="ts">
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference =
    colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <button @click="toggleTheme" class="p-1 inline-flex">
    <Icon
      name="line-md:moon-to-sunny-outline-transition"
      v-if="colorMode.value === 'dark'"
      class="w-5 h-5"
    />
    <Icon
      name="line-md:sunny-outline-to-moon-loop-transition"
      v-else
      class="w-5 h-5"
    />
  </button>
</template>
