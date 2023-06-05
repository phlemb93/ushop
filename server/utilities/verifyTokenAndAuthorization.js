const jwt = require("jsonwebtoken");


const verifyTokenAndAuthorization = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json("You're not authorized")
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {

        if(err){
            res.status(400).json("Invalid token")
        }

        if(tokenData.id || tokenData.isAdmin) {
            req.tokenData = tokenData;
            next();
        } else {
            res.status(400).json("Invalid token")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json("You're not authorized")
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {
       
        if(err) {
            res.status(400).json("Token is invalid")
        }

        if(tokenData.isAdmin) {
            req.tokenData = tokenData;
            next();
        } else {
            res.status(400).json("Only Admin has the permission")
        }
    })

}

module.exports = { verifyTokenAndAuthorization, verifyTokenAndAdmin}