const jwt = require('jsonwebtoken');

function isAuth(req, res, next) {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1]: null;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, "mytopsecret", (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }
        req.user = decoded;
        next();
    });
}


module.exports = { isAuth };
