const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const PORT = 3000
app.use(bodyparser.json())

app.use(express.static(__dirname+"/dist/budgetBuddy"))

app.get('/', (req, res) => res.sendFile('/dist/budgetBuddy/index.html', {root: __dirname + "/"}))

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT);