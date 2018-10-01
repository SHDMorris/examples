let mongoose = require('mongoose');

function createEventListeners() {
    mongoose.connection.on('connected', () => {
        console.log('Successfully connected to the database.');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Database connection closed.');
    });
    mongoose.connection.on('error', (err) => {
        console.log('There was an error.' + err);
    });
}

function connect() {
    mongoose.connect('mongodb://localhost/puppies');

}

function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    createEventListeners,
    connect,
    disconnect
};