import * as express from 'express';

var app:any=express();

app.get('/',(req:any,res:any):any=>{
    res.sendFile('C:/Users/Saurav.Jena.DESKTOP-EEGMJ2V/Desktop/NodeJs/NodeJs/loginFormUsingExpress/index.html');
})
app.get('/login',(req:any,res:any)=>{
    if(req.query.uname=="saurav"&&req.query.pwd=="saurav@123"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Login Successful....</h1>');
        res.end();
    }else{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write('<h2>You have entered wrong Credentials</h2>');
      res.end();
    }
})

app.listen(8080,()=>{
    console.log('Server started at 8080 port');
})

