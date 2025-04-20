const Product = require('../../models/product.js');


const productlist = async(req , res)=>{
    try{
        const product_list = await Product.find();
        res.send({status:"sucessfully", data: product_list}); 
    }catch(err){
        console.log(`here is error : ${err}`);
        res.send({status:"failed",error:err})
    }
};

module.exports = productlist;