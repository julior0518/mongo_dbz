const db = require('../db');
const {User} = require('../models/index');

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));db

const mainSeed = async () => {
    const Users = [
        {
        _id: 1,
        name: 'UserSeed1',
        email: 'the fuego 1',
        image:
            'https://3docean.img.customer.envatousercontent.com/files/252369519/taco_pv.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=d2f1767e3cd0f28c1a3c4dd8d70a8edf'
        },
        {
        _id:2,
        name: 'UserSeed2 ',
        email: 'this is cat user',
        image: 'https://wallpapercave.com/wp/wp5048642.jpg'
        }
    ];
    await User.insertMany(Users);
    console.log('Created some banging user!');
    };

const run = async () => {
    await mainSeed();
    db.close();
};

run();