const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const config = require('./conf');



const init = async () => {
  const server = Hapi.server({
    port: config.serverConfiguration.port
  });
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();