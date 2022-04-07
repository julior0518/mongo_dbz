const db = require('../db');
const {Project} = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));db

const mainSeed = async () => {
    const Projects = [
        {
            user_id: null,
            projectName: "1",
            modelTitle: "1",
            modelKeys: [1,2,3]
        }
    ];
    await Project.insertMany(Projects);
    console.log('Created some banging user!');
    };

const run = async () => {
    await mainSeed();
    db.close();
};

run();