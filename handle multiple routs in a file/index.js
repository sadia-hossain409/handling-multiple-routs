const exp=require('express');
const app= exp.Router();
app.get("/", (req,res)=>{
res.send("home");



});

module.exports=app;