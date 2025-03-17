require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const app = express() // app express
const port = process.env.PORT // port => hardcode  . uat . prod 
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')

// config  template engine
configViewEngine(app)

// khai bao route 
app.use('/', webRoutes);

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})