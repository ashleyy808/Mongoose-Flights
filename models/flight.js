// require mongoose
const mongoose = require('mongoose');

// create a shortcut variable for the Schema class
const Schema = mongoose.Schema;

// create the flightSchema
const destinationSchema = new Schema({
    airport: {
        type: String,
        unique: true,
        enum: ['AUS', 'DAL', 'LAX', 'SAN' & 'SEA']
    },
    arrivals: {
        type:Date
    },
});


 const flightSchema = new Schema({
     airline: {
         type: String,
         enum: ['American', 'Southwest', 'United']
     },
     flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
     },    
     departs: {
         type: Date,
     },
     destinations: [destinationSchema],   
 });

 




// export the result of compiling the schema into a model
module.exports = mongoose.model('Flight', destinationSchema);