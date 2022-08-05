import * as express from 'express';

let accounts:any=express.Router();


accounts.get('/',(req:any,res:any)=>{
    res.status(200).json({'Message':'Welcome to Accounts Module.'});
});

accounts.post('/',(req:any,res:any)=>{
    res.status(200).json({'Message':'Account will add soon'});
});

export default accounts;