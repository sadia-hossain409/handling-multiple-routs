const exp=require('express');
const rou=exp.Router();
rou.post("/post",(req,res)=>{
res.send("i m post");


});
module.exports=rou;