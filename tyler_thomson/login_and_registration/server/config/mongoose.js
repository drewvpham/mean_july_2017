let mongoose = require('mongoose');
let fs = require('fs');

//connect to database
mongoose.connect('mongodb://localhost/login_and_registration', {useMongoClient: true});
//update promise library
mongoose.Promise = global.Promise;

//establish path to models folder
let models_path = __dirname + '/../models';
//load schemas (models)
fs.readdirSync(models_path).forEach(function(file){
  if(file.includes('.js')){
    console.log(`loading ${file}...`);
    require(`${models_path}/${file}`);
  }
})
