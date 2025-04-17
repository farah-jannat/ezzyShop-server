const Usertable = require('../../models/usertable.js');

const deleteuser = async(req , res)=>{
    try{
        const user = await Usertable.findByIdAndDelete(req.params.id);
        res.send({status:"successfully delete", data: user});
    }catch(err){
        res
        .status(500)
        .send({error:"An error occur while deleting data"});
    }
};
module.exports = deleteuser;