// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/mixins" as *;
            @use "@/assets/scss/fonts" as *;
          `,
        },
      },
    },
  },
});
