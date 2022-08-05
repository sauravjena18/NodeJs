var http=require("http");

//Url Module is required to read the Query Parameter in Nodejs.

let url=require("url");

let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    
    let obj=url.parse(req.url,true).query;

    if(obj.uname=="saurav" && obj.pwd=="saurav123"){
        res.write('<h1>Login Succesful...</h1>');
        res.end();
    }else{
        res.write('<h3>You have entered Wrong Credentials</h3>');
        res.end();
    }



})

server.listen(8080);

console.log('Server started at 8080');