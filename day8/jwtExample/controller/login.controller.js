const jwt = require('jsonwebtoken');


function login(req, res) {

    console.log(req.body);
    


    if (req.body.username === 'nitin' && req.body.password === 'userPassword') {

        const payload = {
            username: req.body.username,
            type: 'admin',
        };
        
        const secret = "mytopsecret";

        const token = jwt.sign(payload, secret, { expiresIn: '1h' });

        return res.send({token});
    }
    return res.status(401).send('invalid Username password');

}


module.exports = { login };