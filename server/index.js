const express=require("express");
const app=express();
const {router} = require ("./api/index")
port=3000;

app.use("/data",router)


app.listen(port,()=>{
console.log("server started")
})
