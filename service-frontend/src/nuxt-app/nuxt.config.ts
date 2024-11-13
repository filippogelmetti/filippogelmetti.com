// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/style/global.scss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          additionalData: `
            @use "@/assets/style/scss-shared-modules/mixins" as *;
            @use "@/assets/style/scss-shared-modules/colors.scss" as *;
          `,
        },
      },
    },
  },
});
