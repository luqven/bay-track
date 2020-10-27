const { mongo } = require('mongoose');

const mongoURI = process.env.MONGO_URI;
const secretOrKey = process.env.SECRET;

console.log(mongoURI, secretOrKey)

module.exports = {
  mongoURI: mongoURI,
  secretOrKey: secretOrKey
};
