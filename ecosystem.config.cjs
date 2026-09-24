module.exports = {
  apps: [
    {
      name: 'egbeda-lg-web',
      script: '.next/standalone/server.js',
      cwd: process.env.APP_DIR || '/home/ubuntu/apps/egbeda_lg_fe',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '200M',
      node_args: '--max-old-space-size=160',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '127.0.0.1',
        PORT: 3000,
        NEXT_PUBLIC_API_BASE_URL: 'https://api.egbedalga.oy.gov.ng',
        NEXT_PUBLIC_SITE_URL: 'https://egbedalga.oy.gov.ng',
      },
    },
  ],
}