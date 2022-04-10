const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
    {   
        user_id: {type: String},
        projectName: { type: String,},
        model: {type: Array,}
    },
    { timestamps: true }
);

module.exports =  Project; 

