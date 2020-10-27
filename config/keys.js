const { mongo } = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const secretOrKey = process.env.SECRET;

module.exports = {
  mongoURI: mongoURI,
  secretOrKey: secretOrKey
};
