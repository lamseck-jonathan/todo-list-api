const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    date : {type: Date, require: true},
})

module.exports = mongoose.model('List',listSchema);