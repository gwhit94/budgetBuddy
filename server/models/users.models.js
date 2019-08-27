const pool = require('../connections');

function getUserById(res, userId) {
    pool.query(`SELECT * FROM user WHERE id = ?`, userId, (err, results, field) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(results);
        }
    })
};
function createNewUser(res, user) {
    if (user.username.length > 7 && user.password.length > 7) {
        pool.query('SELECT username FROM user WHERE username = ?', user.username, (err, results) => {
            if (err) {
                return res.send(err);
            }
            else if (results.length > 0) {
                return res.send("Username already in use");
            }
            pool.query(`INSERT INTO user SET ?`, user, (err, results, field) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.send(results);
                }
            })
        })
    }
    else {
        return res.send("Bad credentials")
    }
}
module.exports.getUserById = getUserById;
module.exports.createNewUser = createNewUser;