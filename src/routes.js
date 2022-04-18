const handler= require('./handler.js');

const access = {
  cors: {
    origin: ['*'],
  },
};

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: handler.get.getHostname,
    options: access,
  },
  {
    method: 'GET',
    path: '/hostname',
    handler: handler.get.getHostname,
    options: access,
  },
  {
    method: 'GET',
    path: '/lucky-number',
    handler: handler.get.getLuckyNumber,
    options: access,
  }
];
module.exports = routes;