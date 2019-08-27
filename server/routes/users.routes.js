const pool = require('../connections.js');
const bcrypt = require('bcrypt');

router.get('/user/:userId', anyMiddleWare, (req, res)=>{
    //The below is an example but it can be whatever way you import it you'd like
    postsFunctions.getPostsById(res, req.params.userId);
})