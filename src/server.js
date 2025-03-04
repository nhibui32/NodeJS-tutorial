const express = require('express');
const path = require('path');

const app = express() // app express
const port = 8386 //port 

//config template engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
// khai báo route

app.get('/', function (req, res) {
  res.send('Hello World')
})

// su dung template engine voi nodejs 
app.get('/abc', function (req, res) {
    // res.send('check ABC')
    console.log('Accessing /abc route');
    res.render('sample.ejs')
  })

app.get('/hoidanit', function (req, res) {
    res.send('<h1>check ABC</h1>')
  })

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})