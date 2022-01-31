const handler= require('./handler');

const access = {
  cors: {
    origin: ['*'],
  },
};

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: handler.get.getHostName,
    options: access,
  },
];
module.exports = routes;