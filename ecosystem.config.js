module.exports = {
  apps: [
    {
      name: "NodeFrontend",
      script: "./node_modules/nuxt-start/bin/nuxt-start.js",
      watch: false,
      instances : "1",
      exec_mode : "cluster",
      max_memory_restart: "250M",
      env: {
        "HOST": "0.0.0.0",
        "PORT": 3010,
        "NODE_ENV": "production",
        "GRAPHQL_HOST": "https://neos.headless-demo.neos-hosting.ch"
      }
    }
  ]
}
