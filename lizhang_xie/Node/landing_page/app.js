var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    switch (request.url) {
        case '/':
            fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
            break;
        
        case '/ninjas':
            fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
            break;
        
        case '/dojos/new':
            fs.readFile('dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
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
