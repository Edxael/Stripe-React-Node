const mongoose     = require('mongoose')
const Schema       = mongoose.Schema

let SingerSchema   = new Schema({
    name: String,
    email: String,
    password: String,
    acctype: String,
    package: String,
    stripeid: String
});

module.exports = mongoose.model('customers', SingerSchema)


