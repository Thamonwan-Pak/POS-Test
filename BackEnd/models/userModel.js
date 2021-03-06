var mongoose = require('mongoose');
//schema
var userSchem = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    tel: {type: String, required: true, trim: true},
    age: {type: Number, min: 1, max: 100, default: 15},
    status: {type: String, enum: ["active","pending"], required: true},
    created_date: {type: Date, default: Date.now}
});

//model
var User = mongoose.model("Users", userSchem);
module.exports = User;