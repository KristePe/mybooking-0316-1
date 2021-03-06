const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    },

    passEncrypted: {
        type: String,
        required: true
    },
    isAdmin: {
        type:Boolean,
        required: true
    }
})

module.exports = mongoose.model('bookingAppUsers', userSchema)