const user = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

require('dotenv').config({path: '../.env'})


let controller = {}
//login
controller.login = (req,res,next)=>{
  res.render('login')
}

//home
controller.signin = (req,res,next)=>{
  let obj = req.user
  if(obj.hasOwnProperty("message")){
    res.send(obj.message)
  } else {
    let token = jwt.sign({
      username : obj.username,
      role: obj.role
    },process.env.SIGN,{
      expiresIn : '1h'
    })
    res.json({token: token})
  }
}

module.exports = controller;