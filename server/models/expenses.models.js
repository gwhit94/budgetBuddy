// const pool = require('../connections');

// function getExpense(res, userid) {
//     pool.query(`SELECT * FROM  WHERE user_id = ?`, userid, (err, results, field) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(results);
//         }
//     });
// }
// function addExpense(res, income) {
//     pool.query(`INSERT INTO income SET ?`, income, (err, results, field) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(results);
//         }
//     });
// }

// function deleteExpense(res, id) {
//     pool.query(`DELETE FROM income WHERE id = ?`, id, (err, results, field) => {
//         if (err) {
//             res.send(err);
//         }
//         else {
//             res.send(results);
//         }
//     });
// }

// module.exports.addExpense = addExpense;
// module.exports.getExpense = getExpense;
// module.exports.deleteExpense = deleteExpense;