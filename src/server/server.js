import Hapi from 'hapi';
import connection from './config/connection';
import plugins from './config/plugins';
import logger from './config/logger';
import routes from './config/routes';
import views from './config/views';
import { version } from '../../package.json';

const server = new Hapi.Server();

// Register our connection info
server.connection(connection);

// Register our plugins
server.register(plugins, (error) => {
  if (error) {
    logger.error(error);
  } else {
    // Register our SSR React view
    server.views(views);
    // Add our endpoints and their handlers to our server
    server.route(routes);
    // need this if statement for testing
    if (!module.parent) {
      // Start it up
      server.start((err) => {
        if (err) {
          logger.error(err);
        }
        // Log some info
        logger.info('Server started', {
          version,
          NODE_ENV: process.env.NODE_ENV,
          uri: server.info.uri,
        });
      });
    }
  }
});

export default server;
