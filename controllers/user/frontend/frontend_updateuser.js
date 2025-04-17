const Usertable = require("../../../models/usertable");

const frontendUpdateUser = async(req , res)=>{
    try{
        const updatedUser = await Usertable.findByIdAndUpdate(req.user.id, req.body, {new:true});
        if (!updatedUser){
            return res.status(404).json({status:"failed", message: "User not found"});
            
        }
        res.json({status:"Succesfully frontend updated", data:updatedUser});

    }catch(err){
        console.log(`Error : ${err}`);
        res.status(500).json({status:"failed", errors: err.message});
    }
};

module.exports = frontendUpdateUser;