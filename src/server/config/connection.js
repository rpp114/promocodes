import Path from 'path';

export default {
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../..'), // set this file as the root for other files
    },
  },
};
