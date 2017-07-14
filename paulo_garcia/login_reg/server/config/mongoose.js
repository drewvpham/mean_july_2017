let mongoose = require('mongoose');
let fs = require('fs');

//connect to DB
mongoose.connect('mongodb://localhost/login_reg', {useMongoClient: true});
//update promise library
mongoose.Promise = global.Promise;

//setup path to models folder
let models_path= __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
  if(file.includes('.js')){
    console.log(`loading ${file}`);
    require(`${models_path}/${file}`);
  }
})
