import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
    }),
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
    })
  },
});
