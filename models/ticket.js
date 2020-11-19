// require mongoose
const mongoose = require('mongoose');


// create a shortcut variable for the Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema( {
    seat: String,
    price: Number,
    flight:  {
        type:Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Ticket', ticketSchema);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   