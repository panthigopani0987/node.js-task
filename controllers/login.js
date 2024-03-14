const registertbl = require('../models/registerTable');

const jwtdata = require('jsonwebtoken')

const login = async (req,res) => {
    try {
        const {useremail,password} = req.body;
        const userlogin = await registertbl.findOne({
            $or: [{
                "useremail": useremail
            }, {
                "username ": useremail
            }]
        });
        if (!userlogin || userlogin.password != password) {
            return res.json({ Status: 404, Message: 'Email And Password not Valid' });
        }
        let token = jwtdata.sign({payload : userlogin},'task',{expiresIn : '2h'});
        return res.json({token : token});
    } catch (error) {
        console.log(error);
        return false;
    }
}
module.exports = {
    login
}