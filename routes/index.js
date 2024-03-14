const express = require('express');

const passport = require('passport');

const routes = express.Router();

//controller

const register = require('../controllers/register');

const login = require('../controllers/login');

//routes
//register
routes.post('/register',register.register);

routes.get('/viewuserdata',passport.authenticate('jwt', { session: false }),register.viewuserdata);

//login

routes.post('/',login.login);

module.exports = routes;