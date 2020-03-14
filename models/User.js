const mongoose = require('mongoose');

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
    username: {
      type: String,
      required: true
    },
    houseName: {
      type: String,
      required: true
    },
    lessonData: {
      type: Number,
    },
    quizData: {
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

const User = mongoose.model('User', UserSchema);

module.exports = User;