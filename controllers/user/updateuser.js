const Usertable = require("../../models/usertable.js");

const updateuser = async(req, res)=>{
    try{
        const userId = req.params.id;
        const updatedUser = await Usertable.findByIdAndUpdate(userId, req.body, {new:true});
        if(!updatedUser){
            return res.status(404).json({status:"failed", message:"user not found"});
        }
        res.json({status:"succesfully updatedUser", data: updatedUser});
    }catch(err){
        console.log(`error :${err}`);
        res.status(500).json({status:"failed", error:err.message});
    }
}

module.exports = updateuser;