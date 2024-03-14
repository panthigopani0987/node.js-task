const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    useremail : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});

const register = mongoose.model('register',registerSchema);

module.exports = register;