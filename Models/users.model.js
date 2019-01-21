const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isOver21: {
        type: Boolean,
        require: false
    }
})


module.exports = mongoose.model('User',UserSchema);