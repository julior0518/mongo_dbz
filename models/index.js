const mongoose = require('mongoose');
const UserSchema = require('./User');
const ProjectSchema =require('./Project')

const User = mongoose.model('usuarios', UserSchema);
const Project  =mongoose.model('projectos', ProjectSchema)

module.exports = {
  User,
  Project
}; 