var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    switch (request.url) {
        case '/':
            fs.readFile('./views/index.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });
            break;
        
        case '/cars':
            fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });
            break;
        
        case '/cats':
            fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });
            break;
        
        case '/cars/new':
            fs.readFile('./views/newcars.html', 'utf8', function (errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents); 
                response.end();
            });
            break;
        
        case '/stylesheets/style.css':
            fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
                // if(errors){

                // }
                response.writeHead(200, {'Content-type': 'text/css'});
                response.write(contents);
                response.end();
            });
            break;
        
        case '/images/car.jpg':
            fs.readFile('./images/car.jpg', function(errors, contents){
                response.writeHead(200, {'Content-type': 'image/jpg'});
                response.write(contents);
                response.end();
            });
            break;

        case '/images/cat.jpg':
            fs.readFile('./images/cat.jpg', function(errors, contents){
                response.writeHead(200, {'Content-type': 'image/jpg'});
                response.write(contents);
                response.end();
            });
            break;

        default:
            response.end('URL requested is not available.');
            break;
    }
    


});

server.listen(8000);
console.log('Running in localhost at port 8000');
