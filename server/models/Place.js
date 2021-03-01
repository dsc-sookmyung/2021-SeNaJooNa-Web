const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
    placeKakaoId: {
        type:String
    },
    name: String,
    address: String,
    x: Number,
    y: Number,
    thumbnail: String
})



const Place = mongoose.model('Place', PlaceSchema, 'Place');

module.exports = { Place }