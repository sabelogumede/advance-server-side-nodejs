const mongoose = require('mongoose'),
Shema = mongoose.Shema;

let UserSchema = new UserSchema({
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