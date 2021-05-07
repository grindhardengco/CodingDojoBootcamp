const http = require('http')
const fs = require('fs')
const server = http.createServer(function (request, response){
    console.log('client request URL: ',request.url);

    if(request.url === '/'){
        fs.readFile('index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});

            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/ninjas'){
        fs.readFile('ninjas.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});

            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/dojos/new'){
        fs.readFile('dojos.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});

            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end('Ninjas not found...');
    }

});

server.listen(6789);
console.log("Running server on local host port 6789.")