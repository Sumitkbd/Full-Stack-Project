// user model for login and sign up

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
   displayName : {type: String},
    email : {type: String, unique: true},
    password : {type: String, required: true},
   created_at : {type: Number, default: Date.now().valueOf()},
   updated_at : {type: Number, default: Date.now().valueOf()},
})

module.exports = mongoose.model('MyUser', userSchema)