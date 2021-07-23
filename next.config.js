const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },

  env: {
    ACCESS_UNPLASH: 'my-value',
  },
});
