// express module is used to develop restservices

let express=require('express');

//GET , POST , UPDATE , DELETE , PUT , PATCH 

// Creating the rest object

let app = express();
//app holds the rest object which we can utilize to create rest services.

// Get Request
app.get('/',(req,res)=>{
   res.status(200).json({"message":"Default get Request"})
   res.end();
})

app.get('/demo',(req,res)=>{
    res.status(200).json({'message':'Data from mongoDB Database'});
    res.end();
})

// Post Request
app.post("/",(req,res)=>{
    res.status(200).json({'message':'Default Post request'});
    res.end();
})

app.post('/demo',(req,res)=>{
    res.status(200).json({'message':'Message from MySql Database'});
    res.end();
})

app.listen(8080);
console.log('Nodejs Server is listening on 8080 port.')




