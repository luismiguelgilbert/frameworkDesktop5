import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'
import 'assets/main.scss'

const themeLight: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#10172a",//#6100ee
    secondary: "#4d4d4d",
    success: "#25c760",
    warning: "#ffc82e",
    error: "#ff4c29",
    background: "#f1f5f9",//#f5f5f5
  },
};

const themeDark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#6100ee",
    secondary: "#4d4d4d",
    success: "#25c760",
    warning: "#ffc82e",
    error: "#ff4c29",
  },
};

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      ...labs,
    },
    directives,
    theme: {
      themes: {
        themeLight, themeDark
      },
      defaultTheme: 'themeLight'
    }
  })

  nuxtApp.vueApp.use(vuetify)
})