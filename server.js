const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const PORT = 3000;
const userRoutes = require('./server/routes/users.routes');
const incomeRoutes = require('./server/routes/income.routes');
const expensesRoutes = require('./server/routes/expenses.routes');
app.use(bodyparser.json())

app.use(express.static(__dirname+"/dist/budgetBuddy"))

app.get('/', (req, res) => res.sendFile('/dist/budgetBuddy/index.html', {root: __dirname + "/"}))

app.use('/api/user', userRoutes)
app.use('/api/income', incomeRoutes)


app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT);