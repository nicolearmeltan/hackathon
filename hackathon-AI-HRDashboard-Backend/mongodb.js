const mongoose = require('mongoose');

mongoose.Promise = Promise;

const dbHost = 'localhost';
const dbPort = 27017;
const dbName = 'Employee-Attrition';
const dbURI = `mongodb://${dbHost}:${dbPort}/${dbName}`;

const reconnectTimeout = 5000;

function connect() {
  mongoose.connect(dbURI, { auto_reconnect: true })
    .catch(() => {});
}

module.exports = () => {
  const db = mongoose.connection;

  db.on('connecting', () => {
    console.log('Connecting to MongoDB...');
  });

  db.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    mongoose.disconnect();
  });

  db.on('connected', () => {
    console.log('Connected to MongoDB!');
  });

  db.once('open', () => {
    console.log('MongoDB connection opened!');
  });

  db.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });

  db.on('disconnected', () => {
    console.log(`MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`);
    setTimeout(() => connect(), reconnectTimeout);
  });

  connect();
};