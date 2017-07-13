let http = require('http');
let fs = require('fs');

let server = http.createServer(function(request, response){
  console.log(`the request is ${request.url}`)
  //identify a css request and handle it seperataely
  if(request.url === '/'){
    fs.readFile('index.html', 'utf8', function(errors, contents){
      if(errors){
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 - Page not found");
        response.end();
      }
      else{
        console.log(contents);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(contents);
        response.end();
      }
    })
  }
  else if(request.url === '/ninjas'){
    fs.readFile('ninjas.html', 'utf8', function(errors, contents){
      if(errors){
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 - Page not found");
        response.end();
      }
      else{
        console.log(contents);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(contents);
        response.end();
      }
    })
  }
  else if(request.url === '/dojos/new'){
    fs.readFile('dojos.html', 'utf8', function(errors, contents){
      if(errors){
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 - Page not found");
        response.end();
      }
      else{
        console.log(contents);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(contents);
        response.end();
      }
    })
  }
  else{
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 - Page not found");
    response.end();
  }
})

server.listen(8000, function(){
  console.log('listening on 8000 port')
})
