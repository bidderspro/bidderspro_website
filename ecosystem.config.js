module.exports = {
  apps: [
    {
      name: "bidderspro",
      script: "npm",
      args: "start",
      cwd: "./",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      },
      exec_mode: "cluster",
      instances: "max"
    }
  ]
}; 