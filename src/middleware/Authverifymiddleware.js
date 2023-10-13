const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    let Token = req.headers['token_key']
    jwt.verify(Token, 'mySecretKey1228', (err, decode)=> {
        if(err){
            res.status(401).json({status: "Invalid Token", data: err})
        }else{
            // get username from decoded token and add with request header
            let userName = decode['data']['userName']
            req.headers.userName = userName
            next()
        }
    })
}