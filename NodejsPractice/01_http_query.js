//url module is used to read the query parameters
//url module also a predefined module

let http=require('http');

let url=require('url');

let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    
    //parse the request
    let obj=url.parse(req.url,true).query;
    if(obj.username='saurav' && obj.password == 'saurav@123'){
        res.write('<h1>User Logged in Successfully...</h1>');
        res.end();
    }
    else{
        res.write('<h2 style="color:red">You have entered wrong credentials,Please try again....</h2>')
        res.end();
    }
    
})

server.listen(8080);
console.log('Nodejs Server is listening on 8080 port..')


