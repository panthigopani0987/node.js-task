const express = require('express');

const port = 6000;

const app = express();

app.use(express.json());

const DB = require('./config/mongoose');

const path = require('path');

const passport = require('passport');

const session = require('express-session');

const passportJwt = require('./config/passport-jwt');

app.use(session({
    name : 'test',
    secret : 'task',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24
    }
}));
app.use(passport.session());

app.use(passport.initialize());

app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
        return false;
    }
    console.log('Server Is Start On Port :- '+port);
})