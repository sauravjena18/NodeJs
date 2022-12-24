import * as express from 'express';

let accounts:any=express.Router();

accounts.get('/',(req:any,res:any):any =>{
    res.status(200).json({'message':'welcome to accounts module'});
    res.end();
})

accounts.post('/accounts',(req:any,res:any):any =>{
    res.status(200).json({'message':'Accounts will be opened soon...'})
})

export default accounts;
