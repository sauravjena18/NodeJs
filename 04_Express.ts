import * as express from 'express';

let app:any=express();

app.get("/ashokit",(req:any,res:any):any=>{
    res.status(200).json({'Message':'Welcome to Express using Typescript'});
    res.end();
});

app.listen(8080,()=>{
    console.log('Server started Succesfully at 8080')
})

