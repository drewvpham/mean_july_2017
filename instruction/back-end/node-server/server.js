let http = require('http');
let fs = require('fs');

let server = http.createServer(function(request, response){
	console.log(`the request is ${request.url}`)
	var base = '/'
	switch(request.url){
		case base:
			fs.readFile('index.html', 'utf8', function(errors, contents){
				if(errors){
					response.writeHead(404, {"Content-Type": "text/html"});
					response.write("404 - Page not found")
					response.end()
				}
				else {
					console.log(contents);
					response.writeHead(200, {"Content-Type": "text/html"});
					response.write(contents);
					response.end();
				}
			})
			break;
		default:
			response.writeHead(404, {"Content-Type": "text/html"});
			response.write("404 - Page not found");
			response.end();
	}
	// if(request.url === '/'){
	// 	fs.readFile('index2.html', 'utf8', function(errors, contents){
	// 		if(errors){
	// 			response.writeHead(404, {"Content-Type": "text/html"});
	// 			response.write("404 - Page not found")
	// 			response.end()
	// 		}
	// 		else {
	// 			console.log(contents);
	// 			response.writeHead(200, {"Content-Type": "text/html"});
	// 			response.write(contents);
	// 			response.end();
	// 		}
	// 	})
	// } else {
	// 	response.writeHead(404, {"Content-Type": "text/html"});
	// 	response.write("404 - Page not found")
	// 	response.end()
	// }
})

server.listen(8000, function(){
	console.log('listening on port 8000...')
})
