
export default [{
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: 'public',
      index: true,
    },
  },
}, {
  method: 'GET',
  path: '/',
  handler: (request, reply) => reply.view('App'),
}];
