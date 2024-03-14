const registerTbl = require('../models/registerTable');

const emailValidation = require('email-validator');

const register = async (req, res) => {
    try {
        const { username, useremail, password, confirmpassword } = req.body;
        const existingUser = await registerTbl.findOne({ useremail });
        if (existingUser) {
            return res.json({ Status: 404, Message: 'Email Already Exist' });
        }
        else {
            if (password == confirmpassword) {
                if (emailValidation.validate(useremail)) {
                    const insertdata = await registerTbl.create({
                        username: username,
                        useremail: useremail,
                        password: password,
                        confirmpassword: confirmpassword
                    });
                    if (insertdata) {
                        return res.json({ Status: 200, Message: 'User Register' });
                    } else {
                        return res.json({ Status: 404, Message: 'User Not Register' });
                    }
                }
                else {
                    return res.json({ Status: 404, Message: 'Enter valid email' });
                }
            } else {
                return res.json({ Status: 404, Message: 'Password not match' });
            }
        }
    } catch (error) {
        return res.json({ Status: 404, Message: "error" });
    }
}

const viewuserdata = async(req,res) =>{
    try{
        let viewuser = await registerTbl.find({});
        if(viewuser)
        {
            return res.json({Status : 200,Message : viewuser});
        }
        else{
            return res.json({Status : 404,Message : 'User Data Not Found'});
        }
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    register,
    viewuserdata
}