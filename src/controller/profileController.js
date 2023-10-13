const profileModel = require('../models/profileModel')
const jwt = require('jsonwebtoken')

exports.createProfile = async (req, res) => {
    try {
        let reqBody = req.body;
        let result=await profileModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}
exports.userLogin = async(req, res) => {
    try{
        let username = req.body['userName'];
        let password = req.body['password']
        let result = await profileModel.find({userName: username, password: password})
        if (result.length>0){
            let payload={
                exp: Math.floor(Date.now()/1000)+(24*60*60),
                data: result[0]
            }
            let token = jwt.sign(payload, 'mySecretKey1228')
            res.status(200).json({status:"success", token: token,data: result })
        }else{

            res.status(401).json({status:"Unathuraize",data: "Log in failed"})
        }
    }catch(err) {
         res.status(400).json({status:"Unathuraize",data: err})
    }
}

exports.SelectProfile = async (req, res) => {
    let userName = req.headers['userName'];
    try{
      let data =  await profileModel.find({userName:userName}) 
      res.status(200).json({status: 'success',message: data})
    }catch(err){
        res.status(404).json({status: 'fail', data: err})
    }
}

exports.updateProfile = async(req, res) => {
    let reqbody = req.headers['userName']
    let reqBody = req.body
    res.status(200).json(reqBody)
}

exports.demo = (req, res) => {
    res.status(200).json({status: 'success',message: "data"})
}