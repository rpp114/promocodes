import winston from 'winston';
import chalk from 'chalk';

function printMeta(meta) {
  return Object.keys(meta).reduce((prev, curr) => `${prev}${chalk.magenta(curr)} - ${chalk.blue(meta[curr])}\n`, '');
}

function defineMeta(options, color) {
  if (options.level === 'error') {
    return `\n\n${chalk[color]('STACK TRACE')}\n\n${printMeta(options.meta.stack)}`;
  } else if (options.meta && Object.keys(options.meta).length) {
    return `\n\n${chalk[color]('META DATA')}\n\n${printMeta(options.meta)}`;
  }
  return '';
}

const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)({
      level: 'debug',
      prettyPrint: true,
      handleExceptions: true,
      formatter(options) {
        const color = options.level === 'error' ? 'red' : 'green';
        const meta = defineMeta(options, color);
        // Return string will be passed to logger.
        return `${chalk.blue(new Date())} \n\n${chalk[color](options.level.toUpperCase())} - ${chalk.magenta(options.message || '')} ${meta}`;
      },
    }),
    new (winston.transports.File)({
      name: 'info-file',
      filename: 'filelog-info.log',
      level: 'info',
    }),
    new (winston.transports.File)({
      name: 'error-file',
      filename: 'filelog-error.log',
      level: 'error',
      handleExceptions: true,
      humanReadableUnhandledException: true,
    }),
  ],
});

export default logger;
