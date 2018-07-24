const mongoose = require ("mongoose");
const Schema = mongoose.Schema;


const courtsSchema= new Schema 
({
    name: String,
    address: String,
    city: String,
    zipCode: Number,
    price: Number,
    bookable: Boolean,
    membershipRequired: Boolean

},{
    timestamps: {
        createdAt: "created_at",
        updatedAt:"updated_at"
    }
});

const Courts = mongoose.model ("Courts", courtsSchema );

module.exports = Courts;