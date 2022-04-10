const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        _id: {type: String, required: true},
        name: { type: String, required: true },
        email: { type: String, required: true },
        image: { type: String, required: false },
    },
    { timestamps: true }
);

module.exports =  User; 

