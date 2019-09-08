const mongoose = require('mongoose');
const config = require('config');

const connectDb = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONNECTION_STRING,
            { useNewUrlParser: true });
        console.log('Mongodb connected');
    } catch (err) {
        console.err(err);
    }
}

module.exports = connectDb;
