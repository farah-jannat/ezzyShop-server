const Usertable = require('../../../models/usertable.js');

const frontendUser = async(req , res)=>{
    try{
        const userdetail = await Usertable.findById(req.user.id).select('-password -status -isAdmin');
        if (!userdetail){
            return res.status(404).send({error:'user detail not found'});
        }
        res.status(200).send({status:"sucesfullly", data : userdetail});
    }catch(err){
        res.status(500).send({error:"An error occured while fetching userdetail", servererror:err});
    }
};

module.exports = frontendUser