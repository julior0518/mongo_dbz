const mongoose = require('mongoose');
const UserSchema = require('./User');

const User = mongoose.model('usuarios', UserSchema);

module.exports = {
  User
}; 