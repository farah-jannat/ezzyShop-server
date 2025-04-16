const Usertable = require('../../models/usertable.js')
const userlist = async(req,res)=>{
   try{
    const userdata = await Usertable.find().sort({createdAt:-1});
    console.log("user list data ",userdata);
    res.send({status:"succesfully",data : userdata});
   }catch(err){
    console.log({status:"failed", errors: err.errors});
   }
}
module.exports = userlist