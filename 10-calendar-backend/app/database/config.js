const mongoose = require("mongoose");

const {
    DB_CONN
} = process.env;

const DBConnection = async () => {
    try {
        await mongoose.connect( DB_CONN);
        console.log('database connected');
    } catch (error) {
        console.log(error);
        throw new Error('No database');
    }
}

module.exports = DBConnection;