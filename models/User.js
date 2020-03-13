const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    houseName: {
      type: String,
      required: false
    },
    lessonData: {
      type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

UserSchema.methods.validPassword = (password, encrypted) => {
    return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;