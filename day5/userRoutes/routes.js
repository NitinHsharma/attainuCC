const express = require('express');
const routes = express.Router();
const { getUser, insertUser } = require('./user.controller');


routes.post('/user', insertUser);

routes.get('/user', getUser);


module.exports = routes;