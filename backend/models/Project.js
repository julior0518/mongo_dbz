const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema(
    {   
        user_id: {type: Schema.Types.ObjectId, ref: 'states',},
        projectName: { type: String,  },
        modelTitle: { type: String, },
        modelKeys: {type: Array,}
    },
    { timestamps: true }
);

module.exports =  Project; 

