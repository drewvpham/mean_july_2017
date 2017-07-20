let path = require('path');
let Users = require('./../controllers/users')
let Bikes = require('./../controllers/bikes')

module.exports = function(app){
    app.get('/users', Users.index);
    app.post('/users', Users.create);
    app.get('/users/:id', Users.show);
    app.delete('/users/:id', Users.logout);

    app.get('/session', Users.session);
    app.post('/session', Users.authenticate);

    app.get('/bikes', Bikes.index);
    app.post('/bikes', Bikes.create);
    app.patch('/bikes/:id', Bikes.update);
    app.delete('/bikes/:id', Bikes.destroy);

    app.all('*', function(req, res, next){
        res.sendFile(path.resolve('./public/dist/index.html'))
    })
}