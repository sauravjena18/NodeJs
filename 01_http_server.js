//Http Server
// Http is a predefined module in Nodejs,used to create the http server

var http =require("http");

let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Welcome to Http server. </h1>");
    res.end();
})

server.listen(8080);

console.log('Server started at 8080');