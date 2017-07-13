let Users= require('./../controllers/users')

module.exports = function(app){
  app.get('/', Users.new);
  app.post('/users/', Users.create);
  app.post('/sessions/', Users.authenticate);
  app.get('/users/:id/edit', Users.edit);
  app.post('/users/:id/update', Users.update);
}
