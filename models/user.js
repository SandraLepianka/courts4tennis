const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema= new Schema 
({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String,

    dob: Date,
    ntrpLevel: Number,
    sex: String

},{
    timestamps: {
        createdAt: "created_at",
        updatedAt:"updated_at"
    }
});

const User = mongoose.model ("User", userSchema );

module.exports = User;