const exp= require('express');
const app=exp();
const user=require('./contrl.js');

app.use('/regi', user);
app.listen(3000,()=>{
console.log("http://127.0.0.1:3000");


});