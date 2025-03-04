// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "bidderspro_website",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/getmeachai",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        GITHUB_ID: "99aae2c73fc53d196807",
        GITHUB_SECRET: "55c88cefb1ec80c6b1697811f6ff1e287d554249",
        NEXT_PUBLIC_URL: "http://getmeachai.com",
        NEXTAUTH_URL: "http://getmeachai.com",
        NEXTAUTH_SECRET: "sdf",
        MONGO_URI: "mongodb://localhost:27017/chai",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
