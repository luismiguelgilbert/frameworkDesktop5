import { defineNuxtConfig } from "nuxt/config"
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  },
  css: [
    //'primevue/resources/themes/tailwind-light/theme.css',
    //'primevue/resources/themes/bootstrap4-light-blue/theme.css',
    //'primevue/resources/themes/arya-green/theme.css',
    //'primevue/resources/themes/arya-orange/theme.css',
    //'primevue/resources/primevue.css',
    //'primeicons/primeicons.css',
    //'primeflex/primeflex.css',
    //'@fortawesome/fontawesome-svg-core/styles.css',
    //'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
    //'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
    //'https://use.fontawesome.com/releases/v6.1.1/css/all.css',
    //'https://cdn.jsdelivr.net/npm/quasar@2.10.0/dist/quasar.prod.css'
    '@fortawesome/fontawesome-free/css/fontawesome.css',
    '@fortawesome/fontawesome-free/css/solid.css',
    '@fortawesome/fontawesome-free/css/regular.css',
    '@fortawesome/fontawesome-free/css/brands.css',
    
    //QUASAR:
    /*'@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css'*/

    //VUETIFY:
    'vuetify/lib/styles/main.sass',
    //'mdi/css/materialdesignicons.min.css',

    //HOOT
    //'~/assets/Hoot/_seVariables.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    //'@nuxtjs/supabase'
  ],
  build: {
		//transpile: ['primevue']
    transpile: ['vuetify']
	},
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
})
