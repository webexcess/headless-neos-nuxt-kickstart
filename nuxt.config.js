const pkg = require('./package')
const axios = require('axios')
const https = require('https')

const ENV_GRAPHQL_HOST = process.env.GRAPHQL_HOST ? process.env.GRAPHQL_HOST : 'https://neos.headless-demo.neos-hosting.ch'
const ENV_PROXY_TARGET = process.env.PROXY_TARGET ? process.env.PROXY_TARGET : ENV_GRAPHQL_HOST
let ENV_LAN_PUBLIC = process.env.LAN_PUBLIC ? process.env.LAN_PUBLIC : false

if (ENV_LAN_PUBLIC === true || ENV_LAN_PUBLIC === 'true') {
  var os = require('os');
  var ifaces = os.networkInterfaces();
  console.log('Detected network interfaces:');

  Object.keys(ifaces).forEach(function (ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ':' + alias, iface.address);
      } else {
        // this interface has only one ipv4 adress
        console.log(ifname, iface.address);
      }

      if (ENV_LAN_PUBLIC === true || ENV_LAN_PUBLIC === 'true') {
        ENV_LAN_PUBLIC = iface.address
      }

      ++alias;
    });
  });

  console.log('Selected network interface: ' + ENV_LAN_PUBLIC)
}

export default {
  mode: 'universal',

  server: {
    host: ENV_LAN_PUBLIC ? '0.0.0.0' : 'localhost'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/global.scss',
  ],

  /*
   ** Nuxt.js styleResources for every component
   */
  styleResources: {
    scss: [
      '~/assets/_colors.scss',
      '~/assets/_mixins.scss'
    ]
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#427FB3',
    height: '2px'
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/components',
    '~/plugins/i18n',
    '~/plugins/global'
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],

  env: {
    httpEndpoint: ENV_LAN_PUBLIC ? 'http://' + ENV_LAN_PUBLIC + ':3000/root' : ENV_GRAPHQL_HOST + '/root'
  },

  proxy: {
    '/root': ENV_PROXY_TARGET,
    '/_Resources': ENV_PROXY_TARGET,
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },

  router: {
    middleware: ['i18n', 'navigation', 'dimensions', 'breadcrumb', 'general'],

    /*
     ** Customize link classes
     */
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
  },

  generate: {
    routes: async () => {
      const uri = ENV_GRAPHQL_HOST + '/root'

      const query = `
        query allDocuments {
          documents: getNodeInAllDimensions(filter: {type: {eq: "Home,Page"}}) {
            ... on Document {
              uriPath
            }
            ... on Home {
              uriPath
            }
            ... on Shortcut {
              uriPath
            }
          }
        }
      `

      const staticRoutes = []

      return axios({
        url: uri,
        method: 'post',
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        }),
        data: {
          query
        }
      }).then(result => {
        const {
          data
        } = result
        const dynamicRoutes = data.data.documents.map(document => document.uriPath)
        return staticRoutes.concat(dynamicRoutes)
      })
        .catch(error => {
          console.log(error)
        })
    }
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
