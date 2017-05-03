const mongoose = require('mongoose');
var Schema = mongoose.Schema

const userSchema = new Schema({
  id_member: Number,
  username: String,
  password: String,
  role: String
})

let User = mongoose.model('User', userSchema)
module.exports = User;