//Express
//Express framework is used to develop the rest services.
//Express is a third party Module.

const { serialize } = require("bson");
let express=require("express");

let app=express(); //It will automatically return rest Object.

app.get("/",(req,res)=>{
    res.status(200).json({"Message":"Default Get Request"});
    res.end();
});

app.get("/demo",(req,res)=>{
    res.status(200).json({'Message':"Get Data from Mongo DB data soon"});
    res.end();
})
app.post("/",(req,res)=>{
    res.status(200).json({'Message':'Default Post Request'});
    res.end();
});
app.post("/demo",(req,res)=>{
    res.status(200).json({'Message':'Post Data from Oracle database soon'});
    res.end();
});

app.listen(8080);

console.log('Server started at 8080');





