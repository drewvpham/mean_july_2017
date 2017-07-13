let mongoose = require('mongoose');
let fs = require('fs');


mongoose.connect('mongodb://localhost/login_registration', { useMongoClient: true});

mongoose.Promise=global.Promise;



let models_path=__dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
  if(file.includes('.js')){
    console.log('hiii');
    require(`${models_path}/${file}`)
  }
})
