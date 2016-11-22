import dotenv from 'dotenv';
import logger from './logger';

const envVars = {
  register: (server, options, next) => {
    logger.info('Start retreiving ENV vars');
    dotenv.config();
    logger.info('Finished retreiving ENV vars');
    next();
  },
};

envVars.register.attributes = {
  name: 'envVars',
  version: '1.0.0',
};

export default envVars;
