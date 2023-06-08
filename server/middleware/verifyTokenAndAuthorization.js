const jwt = require("jsonwebtoken");


const verifyTokenAndAuthorization = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
       return res.status(400).json("You're not authenticated")
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {

        if(err){
            res.status(400).json("Invalid token")
        }

        if(tokenData) {
            req.tokenData = tokenData;
            next();
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json("You're not authenticated")
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {
       
        if(err) {
            res.status(400).json("Token is invalid")
        }

        if(tokenData.isAdmin) {
            next();
        } else {
            res.status(400).json("You're not authorized")
        }
    })

}

module.exports = { verifyTokenAndAuthorization, verifyTokenAndAdmin}