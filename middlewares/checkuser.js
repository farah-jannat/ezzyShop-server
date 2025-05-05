const jwt = require("jsonwebtoken");
const secretKey = "12345678910";
const checkuser = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    req.user = "not_login";
    console.log("the token is not ok");
    next();
  } else {
    const token = authorizationHeader.slice(7).replace(/"/g, "");
    console.log("token :", token);
    jwt.verify(token, "12345678910", (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: "failed",
          errors: "Unauthorized: Invalid token",
          token,
        });
      }
      req.user = decoded;
      next();
    });
  }
};

module.exports = checkuser;
