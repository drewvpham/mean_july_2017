var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    console.log('client request URL:', req.url);

    if(req.url === '/'){
        fs.readFile('index.html', 'utf8', function (errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url === '/ninjas'){
        fs.readFile('ninjas.html','utf8', function(errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }
    else if(req.url ==='/dojo/new'){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(contents);
            res.end();
        });
    }

    else {
        res.writeHead(404);
        res.end('File not found!');
    }
});

server.listen(8000);

console.log("Running in localhost on port 8000");