//import expess module

import * as express from 'express';

let app:any=express();

app.get('/',(req:any,res:any):any=>{
    res.status(200).json({'message':'Default get Request'});
    res.end();
})

app.listen(8080,()=>{
    console.log('Server started successfully... on 8080 port');
});