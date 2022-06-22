const router = require('express').Router();
const { login } = require('./controller/login.controller.js');
const { getEmployee, addEmployee, updateEmployee, deleteEmployee } = require('./controller/employee.controller.js');
const { isAuth } = require('./middelware/jwtMiddelware.js');


router.post('/login', login);
router.get('/employee',isAuth, getEmployee);
router.post('/employee', isAuth, addEmployee);
router.put('/employee/:id', isAuth, updateEmployee);
router.delete('/employee/:id',isAuth, deleteEmployee);


module.exports = router;