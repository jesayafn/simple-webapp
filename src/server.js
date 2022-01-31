const Hapi = require('hapi');
const routes = require('./routes');
const config = require('./conf');



const init = async () => {
  const server = Hapi.server({
    port: config.serverConfiguration.port,
    host: config.serverConfiguration.hostname,
  });
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();