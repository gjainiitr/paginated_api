var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    _id: {
        type: mongoose.ObjectId
    },
    address: {
        building: {
            type: String
        },
        street: {
            type: String
        }
    },
    cuisine: {
        type: String
    },
    grades: [{
        date: { type: Date }, // Error possible
        grade: { type: String },
        score: { type: Number }
    }],  
    name: {
        type: String
    },
    restaurant_id: {
        type: String
    }
},
{
    //collection: 'Test'
    collection: 'Restaurants'
});

module.exports = mongoose.model('Hotel', hotelSchema);