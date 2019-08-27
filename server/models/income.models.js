const pool = require('../connections');

function addIncome(res, income) {
    pool.query(`INSERT INTO income SET ?`, income, (err, results, field) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
}

module.exports.addIncome = addIncome;