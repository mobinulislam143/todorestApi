const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({

    userName :{type: String},
    TodoSubject: {type: String},
    TodoDesc: {type: String},
    TodoStatus: {type: String},
    TodoCreateDate: {type: Date},

}, {versionKey: false, timeStamp: true})

const TodoModel = mongoose.model('Lists', DataSchema)

module.exports = TodoModel