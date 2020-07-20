module.exports = {
  mode: 'universal',
  head: {
    title: 'Invest Log',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.13.0/css/all.css' }
    ]
  },
  loading: {
    color: '#fff'
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  plugins: [
    '~/plugins/i18n.ts',
    '~/plugins/buefy.ts',
    '~/plugins/vue2filters.ts',
    '~/plugins/vee-validate.ts'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    'nuxt-i18n',
    'nuxt-buefy',
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  build: {
    transpile: ['vee-validate/dist/rules']
  },
  router: {
    linkActiveClass: 'is-active'
    // middleware: ['auth']
  },
  buefy: {
    defaultToastDuration: 4000,
    defaultSnackbarDuration: 6000
  },
  i18n: {
    locales: ['pt_BR', 'en_US'],
    defaultLocale: 'pt_BR',
    vueI18n: {
      fallbackLocale: 'pt_BR',
      messages: {
        pt_BR: require('./locales/pt_BR.json'),
        en_US: require('./locales/en_US.json')
      }
    }
  },
  auth: {
    // strategies: {
    //   local: {
    //     endpoints: {
    //       login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
    //       logout: { url: '/api/auth/logout', method: 'post' },
    //       user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
    //     }
    //   }
    // }
  }
}
