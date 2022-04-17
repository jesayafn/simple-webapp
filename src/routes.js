const handler= require('./handler');

const access = {
  cors: {
    origin: ['*'],
  },
};

const routes = [
  {
    method: 'GET',
    path: ['/','/hostname'],
    handler: handler.get.getHostname,
    options: access,
  },
  {
    method: 'GET',
    path: '/dad-jokes',
    handler: handler.get.getDadJokes,
    options: access,
  }
];
module.exports = routes;