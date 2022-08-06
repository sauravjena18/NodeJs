//Read the get Parameters using express

import * as express from 'express';

var app:any=express();

//authorization

let auth = (req:any,res:any,next:any):any=>{
   let allHeaders=req.headers;
   if(allHeaders.token=="admin"){
    next();
   }else{
    res.status(401).json({auth:'fail'});
   }
}

app.get('/sample/:uname/:pwd',(req:any,res:any)=>{
    if(req.params.uname="saurav" && req.params.pwd=="saurav@123"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Login Successful....</h1>');
        res.end();
    }else{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write('<h2>You have entered wrong Credentials</h2>');
      res.end();
    }
});

app.get('/login',[auth],(req:any,res:any):any=>{
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
    console.log('Server Started at 8080')
})