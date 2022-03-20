const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apartmentSchema = new Schema ({
    photos: [{
        type: String,
        required: true
    }],

    description: {
        type: String,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    // dates: [{
    //     type: String,
    //     required: true
    // }],

    owner: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('bookingApartments', apartmentSchema)