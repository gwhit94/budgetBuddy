const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const PORT = 3000;
const JwtStrategy = require('.middleware/isAuthenticated');
const passport = require("./server/config/passport.conf");
const userRoutes = require('./server/routes/users.routes');
const incomeRoutes = require('./server/routes/income.routes');
const expensesRoutes = require('./server/routes/expenses.routes');
const expense_typesRoutes = require('./server/routes/expense_types.routes');

app.use(JwtStrategy.initialize());
app.use(passport.initialize());
app.use(bodyparser.json());
app.use(express.static(__dirname + "/dist/budgetBuddy"));
app.use('/api/user', userRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/expense_types', expense_typesRoutes);

app.get('/', (req, res) => res.sendFile('/dist/budgetBuddy/index.html', { root: __dirname + "/" }));
app.get('/*', (req, res) => {
    res.redirect('back');
})

app.listen(PORT);