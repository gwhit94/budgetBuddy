const express = require('express');
const mysql = requite('mysql');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname+"/dist"))

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT);