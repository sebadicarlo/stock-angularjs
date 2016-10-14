/*
//Lectura de los recursos del directorio
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT = 8087;

//We need a function which handles requests and send response
function handleRequest(request, response) {
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
*/

//Implementacion de express con node.js (para trabajar backend con javascript)

/*descargar node.js
ejecutar en cmd: npm install express
moverme hasta el directorio donde esta el archivo server.js y ejecutar: node server.js
*/
var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

app.listen(8089)