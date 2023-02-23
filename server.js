var http = require("http")
const { type } = require("os")

http.createServer(function(req, response){
response.writeHead(3000, {"content-type":"text/plain"});
response.end('<h1>Hello Node!!!</h1\n')
}).listen(3000);
 console.log("server running at http://localhost:3000")