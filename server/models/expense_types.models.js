const pool = require('../config/database.conf.js');

function getTypes(res, req) {
    pool.query(`SELECT * FROM expense_type`, (err, results, field) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(results);
        }
    });
}

module.exports.getTypes = getTypes;