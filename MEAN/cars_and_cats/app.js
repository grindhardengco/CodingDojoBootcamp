const http = require('http')
const fs = require('fs')
const server = http.createServer(function (request, response){
    console.log('client request URL: ',request.url);

    if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/510'){
        fs.readFile('./images/510.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/z'){
        fs.readFile('./images/Z.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars/cobra'){
        fs.readFile('./images/cobra.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});

            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats/cougar'){
        fs.readFile('./images/cougar.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats/lynx'){
        fs.readFile('./images/lynx.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats/tiger'){
        fs.readFile('./images/tiger.png', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/png'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/cars/add'){
        fs.readFile('views/cars_form.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end('Cars nor cats found...');
    }

});

server.listen(6789);
console.log("Running server on local host port 6789.")