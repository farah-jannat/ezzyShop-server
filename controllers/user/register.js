
const Usertable = require('../../models/usertable.js');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
secertKey = '12345678910';


const register = async(req, res)=>{
    try{
        const {first_name, last_name, dob,email, mobile, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const bcrypt_password = await bcrypt.hash(password,salt);
        const createuser = new Usertable({
            first_name,
            last_name,
            dob,
            email,
            mobile,
            password: bcrypt_password,
        })
        const response = await createuser.save();
        const token = jwt.sign({id:response.id},secertKey,{expiresIn:'1h'})
        console.log("the token is:", token)
        
        res.send({status:"succesful",data:response, token:token});

    }catch(error){
        res.send({status:"failed", errors:error})
        console.log("user register error is here", error)
    }
}

module.exports = register