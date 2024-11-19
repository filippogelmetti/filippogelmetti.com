// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  css: ["@/assets/style/global.scss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `            
            @use "@/assets/style/scss-shared-modules/mixins" as *;
            @use "@/assets/style/scss-shared-modules/colors.scss" as *;            
          `,
        },
      },
    },
  },
  vue: {},
});
