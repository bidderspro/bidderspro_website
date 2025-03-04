// ecosystem.config.js

module.exports = {
  apps: [
    {
      name: "bidderspro_website",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/home/getmeachai",
      instances: "max",
      autorestart: true,
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
