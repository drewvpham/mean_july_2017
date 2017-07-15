let Users = require('../controllers/users');

module.exports = function(app){
    app.get('/', Users.new);
    app.post('/users', Users.create);
    app.post('/login', Users.login);
}
