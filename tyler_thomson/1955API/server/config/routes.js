let Persons = require('../controllers/persons');

module.exports = function(app){
  app.get('/', Persons.index);
  app.get('/new/:name/', Persons.create);
  app.get('/remove/:name/', Persons.remove);
  app.get('/:name/', Persons.show);
};
