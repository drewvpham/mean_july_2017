let mongoose = require('mongoose');
let fs = require('fs');

//connect to database
mongoose.connect('mongodb://localhost/1955api', {useMongoClient: true});
//update promise library
mongoose.Promise = global.Promise;

//establish path to models folder
let model_path = __dirname + '/../models';
//load schemas (models)
fs.readdirSync(model_path).forEach(function(file){
  if(file.includes('.js')){
    console.log(`loading ${file}...`);
    require(`${model_path}/${file}`);
  }
})
