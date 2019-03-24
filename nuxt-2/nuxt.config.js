const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The Ultimate Web Dev Blog'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fa923f',
    failedColor: 'yellow',
    height: '4px',
    duration: 5000
  },
  // use this only when mode is SPA (it's a spinner):
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#fa923f'
  // },
  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-ded82.firebaseio.com'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
