const user = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const passwordHash = require('password-hash');

let controller = {}
var data;
//create
controller.create = (req, res, next) => {
  data = user({
    id_member: req.body.member,
    username: req.body.user,
    password: passwordHash.generate(req.body.password),
    role: req.body.role
  })

  data.save((err, user)=>{
    if(err) throw err
    res.send('Create Successfully')
  })
}


module.exports = controller;