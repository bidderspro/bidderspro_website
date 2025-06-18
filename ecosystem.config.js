module.exports = {
  apps: [
    {
      name: "bidderspro",
      script: ".next/standalone/server.js",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0"
      },
      exec_mode: "cluster",
      instances: 1,
      log_file: "./logs/app.log",
      out_file: "./logs/out.log",
      error_file: "./logs/error.log",
      merge_logs: true,
      time: true,
      watch: false,
      max_memory_restart: "500M"
    }
  ]
}; 