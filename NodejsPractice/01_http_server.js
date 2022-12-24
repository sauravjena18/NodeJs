// "http" is a predefined module in nodejs,used to create the htp server

let http=require('http');
let server=http.createServer((req,res)=>{
    res.write('Welcome to Nodejs');
    res.end();
})

server.listen(8080);
console.log('Our Nodejs Server is listening on 8080 port');