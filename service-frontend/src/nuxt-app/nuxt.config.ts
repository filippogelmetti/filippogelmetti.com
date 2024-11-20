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
  modules: [
    [
      "nuxt-mail",
      {
        message: {
          from: "webform@filippogelmetti.com",
          to: "filippo.gelmetti@gmail.com",
        },
        smtp: {
          host: "mail.filippogelmetti.com",
          port: 465,
          secure: true, // Use SSL/TLS
          auth: {
            user: "webform@filippogelmetti.com",
            pass: "q@F?$tR2X]6K",
          },
        },
      },
    ],
    "nuxt-mail",
  ],
});