module.exports = {
  apps: [
    {
      name: "NodeFrontend",
      script: "./node_modules/nuxt-start/bin/nuxt-start.js",
      watch: false,
      watch_options: {
        "followSymlinks": true,
        "usePolling": true,
        "interval": 400
      },
      instances : "1",
      exec_mode : "cluster",
      max_memory_restart: "250M",
      env: {
        "HOST": "0.0.0.0",
        "PORT": 3000,
        "NODE_ENV": "production",
        "GRAPHQL_HOST": "http://localhost:3000",
        "PROXY_TARGET": "http://localhost:8081"
      }
    }
  ]
}
