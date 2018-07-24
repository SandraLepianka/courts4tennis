const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const bookingSchema= new Schema 
({
    user: String,
    courtid: String,
    date: String,
    price: Number,
    duration: Number,
    time: Number,
    type: String,


},{
    timestamps: {
        createdAt: "created_at",
        updatedAt:"updated_at"
    }
});

const Booking = mongoose.model ("Booking", bookingSchema );

module.exports = Booking;