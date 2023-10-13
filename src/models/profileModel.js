const mongoose = require('mongoose')


const DataSchema = mongoose.Schema({
    FirstName: {type: String},
    LastName: {type: String},
    EmailAddress: {type: String},
    MobileNumber: {type: Number, unique: true},
    city: {type: String},
    userName: {type: String, unique: true},
    password: {type: String}

}, { versionKey: false,
    timestamps: true,})

const profileModel = mongoose.model('profiles', DataSchema)

module.exports = profileModel