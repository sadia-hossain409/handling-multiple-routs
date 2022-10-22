const exp=require('express');

const app=exp();
const hndl=require('./index.js');
const hndl2=require('./app.js');
const hndl3=require('./post1.js');
app.use(hndl);
app.use(hndl2);
app.use(hndl3);
module.exports=app;
