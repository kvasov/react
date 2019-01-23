module.exports = {
  apps: [
    {
      name: 'MyShop',
      script: './build/server.js',
      cwd: '/Users/dmitry/react/react',
      instances: 2,
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
        PORT: 9020
      }
    }
  ],

  deploy: {
    production: {
      user: 'kvasovd',
      host: ['host.com'],
      ref: 'origin/master',
      repo: 'git@github.com:kvasov/react.git',
      path: '/Users/dmitry/react/react',
      'post-deploy': 'yarn && yarn build:server && pm2 startOrRestart pm2.config.js --env production'
    }
  }
};