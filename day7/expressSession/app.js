const express = require('express');
const app = express();
var session = require('express-session')

app.use(session({
    secret: 'myscrect',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(express.json());

const users = [];


app.get('/login', (req, res) => {
    const { username, password} = req.body;
    const isValidUser = users.find(item => item.username ===username&& item.password === password);
    if (isValidUser) {
        req.session.isLoggedIn = true;
        return res.render('profile');
    } else {
        return res.send('invalid ')
    }
});

app.get('/signup', (req, res) => {
    const { username, password } = req.body;
    const newUser = { username, password };
    users.push(newUser);

    req.session.isLoggedIn = true;
    return res.render('profile');

});



app.get('/profile', (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.render('login')
    }

    return res.render('profile')
});


app.listen(3000, function () {
    console.log("server is running on 3000");
})