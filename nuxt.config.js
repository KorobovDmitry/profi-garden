const axios = require('axios')

export default {

  telemetry: false,

  env: {
    baseUrl: 'https://pg.icmy.ru/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru-RU',
      amp: true
    },
    title: 'profi-garden',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ]
  },

  loading: { color: '#78b926' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  pwa: {
    icon: false // disables the icon module
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://gitlab.com/broj42/nuxt-gmaps
    ['nuxt-gmaps', {
      key: 'AIzaSyBSqlAu4kiwfh5iT0RrBRec9BTWDxzybuw',
      //you can use libraries: ['places']
    }],
    ['@pivale/nuxt-image-loader-module', {
      imagesBaseDir: 'content',
      imageStyles: {
        thumbnail: { actions: ['gravity|Center', 'resize|320|180^', 'extent|320|180|+0|+90'] },
        small: { macros: ['scaleAndCrop|160|90'] },
        medium: { macros: ['scaleAndCrop|320|180'] },
        large: { macros: ['scaleAndCrop|640|360'] },
      },
      // Optional responsive style profiles:
      responsiveStyles: {
        thumb: {
          srcset: 'small 160w, medium 320w, large 640w',
          sizes: '(min-width: 1280px) 100vw, 50vw',
        },
      },
    }],
  ],

  sitemap: {
    // options
    hostname: 'https://profi-garden.com',
    gzip: true,
    exclude: [
      '/_icons',
      // '/secret',
      // '/admin/**'
    ],
    // routes: async () => {
    //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    //   return data.map((user) => `/users/${user.username}`)
    // }
  },

  svgSprite: {
    // manipulate module options
    input: '~/assets/sprite/svg', // Directory of original svg files
    output: '~/assets/sprite/gen' // Directory to store generated sprites
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
