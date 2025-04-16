const Usertable = require('../../models/usertable.js');

const usersingle = async(req, res)=>{
    try{
        const userId = req.params.id;
        const userdetail = await Usertable.findById(userId);
        if(!userdetail){
            return res.status(404).send({error:"user not found"});
        }
        res.status(200).send({status:"successful", data: userdetail});

    }catch(err){
        res.status(500).send({error:"An error occur while fetching userdetail", servererror:err})
    }
}
module.exports=usersingle;