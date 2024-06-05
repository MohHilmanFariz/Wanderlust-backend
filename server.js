require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./routes/itineraryRoutes');

const init = async () => {
  // Create Hapi server
  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: 'localhost',
  });

  // Register routes
  server.route(routes);

  // Start the server
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
