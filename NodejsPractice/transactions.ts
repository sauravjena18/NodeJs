import * as express from 'express';

// Steps to create the sub modules 

let transactions:any=express.Router();
transactions.get('/',(req:any,res:any):any=>{
   res.status(200).json({'message':'Welcome to transactions module'});
   res.end();
})

transactions.get('/transactions',(req:any,res:any):any=>{
   res.status(200).json({'message':'Please wait while your transactions is on progress....'});
   res.end();
})

export default transactions;