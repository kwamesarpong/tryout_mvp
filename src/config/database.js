/* eslint-disable no-console */

import constants from './constants';

import mongoose from 'mongoose';


// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect to the database with the provided URL
try {
    mongoose.connect(constants.MONGO_URL, {
        useMongoClient: true,
    });
}
catch (err) {
    mongoose.createConnection(constants.MONGO_URL, {
        useMongoClient: true,
    });
}

mongoose.connection
    .once('open', () => console.log('MongoDB running'))
    .on('error', e => {
        throw e;
    });