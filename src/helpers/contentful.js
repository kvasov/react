const contentful = require('contentful');

const client = contentful.createClient({
  space: 's2s4jjza7wvf',
  environment: 'master',
  accessToken: '60b5336d49589f58f7fbd9ab244e653564609e68f66839f3210567fb3ba678b9'
});

export default client;
