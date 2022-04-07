const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
    {
        projectName: { type: String, required: true },
        modelTitle: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports =  User; 

