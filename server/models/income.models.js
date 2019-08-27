const pool = require('../connections');

function getIncome(res, userid) {
    pool.query(`SELECT * FROM income WHERE user_id = ?`, userid, (err, results, field) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
}
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
function deleteIncome(res, id) {
    pool.query(`DELETE FROM income WHERE id = ?`, id, (err, results, field) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
}

module.exports.addIncome = addIncome;
module.exports.getIncome = getIncome;
module.exports.deleteIncome = deleteIncome;