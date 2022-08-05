import * as express from 'express';
import { appendFile } from 'fs';

import transactions from "./05_Transactions";
import accounts from "./06_accounts";
var app=express();

app.use('/module1',transactions);
app.use('/module2',accounts);

app.listen(8080,()=>{
    console.log('Server Started at 8080 Port');
})