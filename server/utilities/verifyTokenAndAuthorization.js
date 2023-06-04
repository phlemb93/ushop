const jwt = require("jsonwebtoken");


const verifyTokenAndAuthorization = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json({error: "You're not authorized"})
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {

        if(err){
            res.status(400).json({error: "Your token is invalid"})
        }

        if(tokenData.id === req.params.id || tokenData.isAdmin) {
            next();
        } else {
            res.status(400).json({error: "Your token is invalid"})
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {

    const { authorization } = req.headers;

    if(!authorization) {
        res.status(400).json({error: "You're not authorized"})
    }
    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, tokenData) => {
       
        if(err) {
            
            res.status(400).json({error: "Token is invalid"})
        }

        if(tokenData.isAdmin) {
            req.body = tokenData;
            next();
        } else {
            res.status(400).json({error: "Only Admin has access"})
        }
    })

}

module.exports = { verifyTokenAndAuthorization, verifyTokenAndAdmin}