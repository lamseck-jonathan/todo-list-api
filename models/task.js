const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name : {type :String , require : true},
    isDone : {type: Boolean}
});

module.exports = mongoose.model('Task',taskSchema);