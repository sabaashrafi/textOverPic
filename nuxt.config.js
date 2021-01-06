import colors from "vuetify/es5/util/colors";


export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",


  loading: false,
  /*
   ** Global CSS
   */
  css: [],


  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "~/plugins/api",
    "~/services/index.service"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
  ],
  // measurementId: "G-W3WX3W5EBP"
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],



  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://textoverimage.moesif.com/'
  },




  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  vuetify: {
    defaultAssets: {
      font: false,
      icons: false
    },
    treeShake: true,
    options: {
      customProperties: false
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#00838F",
          accent: "#00CCFF",
          secondary: "#D4F7FF",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
  },

  server: {
    host: '0.0.0.0',
    port: '3002'
  }
};
