const jwt = require('jsonwebtoken');
const secretKey = "12345678910";
const authenticateToken = (req,res,next)=>{
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")){
        return res.status(404).json({status:"failed", errors:"Unauthorized: Missing or invalid token"});
    }
    const token = authorizationHeader.slice(7).replace(/"/g, '');
    jwt.verify(token,"12345678910", (err,decoded)=>{
        if(err){
            return res.status(401).json({status:"failed", errors: "Unauthorized: Invalid token", token});
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;