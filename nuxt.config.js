
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Pre-Plan Cemetery & Funeral | 预置墓园及殡葬服务',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:  '预置墓园及殡葬服务，土葬服务，骨灰安葬服务' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'https://js.createsend1.com/javascript/copypastesubscribeformlogic.js', type:'text/javascript'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'~plugins/smoothscroll.js', ssr:false},
    { src: "~plugins/aos", ssr: false },
    { src: "~plugins/antcomponent.js", ssr: false },
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        locales: [
          {
            code: 'zh',
            iso: 'zh-CN',
            name: 'ZH'
          },
          {
            code: 'tc',
            iso: 'zh-Hant',
            name: 'TC'
          }
        ],
        defaultLocale: 'zh',
        detectBrowserLanguage: {
          useCookie: false,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: false,
          fallbackLocale: 'zh'
        }
      }
    ],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    timing: false
  }
}
