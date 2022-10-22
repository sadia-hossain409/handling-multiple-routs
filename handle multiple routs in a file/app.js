
const epr= require("express");
const ap1= epr.Router();
ap1.get("/about",(req,res)=>{
res.send("about");


});
module.exports=ap1;