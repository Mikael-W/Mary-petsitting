import dotenv from "dotenv"; dotenv.config();

export default {
  env: {
    CONTENTFUL_SPACE: process.env.CTF_SPACED_ID,
    CONTENTFUL_ACCESSTOKEN: process.env.CTF_CDA_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CTF_ENVIRONMENT
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mary-Petsitting | petsitter Nantes',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name:"google-site-verification", content:"rXRtQQRHYBAJiLFHOREZwe9UkvH3VghI8MSeaXNQ7Ew"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Votre pet sitter sur Nantes, je m occupe et prends soin de vos animaux pendant votre absence petsitting Nantes, garde animaux nantes, cat sitting Nantes, dog sitting nantes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mary_favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/contentful", "~/plugins/posts"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['nuxt-gsap-module'],

  gsap: {
    /* module options */
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    injected: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    fallback: true
  }
}
