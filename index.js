const express = require('express');
const port = 8000;
const app=express();

const db=require('./config/mongoose');

app.use(express.urlencoded());


app.use(express.static('./assests'));
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routes'));




app.listen(port,(err)=>{
    if(err){console.log("error in setting up the server",err);return;}
    console.log("server is up and running on port",port);
})