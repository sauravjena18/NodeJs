//Created the Sub Module.
import * as express from 'express';

let transactions=express.Router();

transactions.get("/",(req:any,res:any)=>{
    res.status(200).json({'Message':'transcations soon'});
});

transactions.get('/pierre',(req:any,res:any)=>{
    res.status(200).json({'Message':"Welcome to pieree for Nodejs"});
});


export default transactions;