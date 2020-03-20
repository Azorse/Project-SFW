const mongoose = require('mongoose');
// const user = require("./User")

const Schema = mongoose.Schema;

const quizSchema = new Schema({
    question: {
        answer: {
            type: Number,
            required: true
        },
        scores: {
            gryffindor: {
                type: Number
            },
            slytherin: {
                type: Number
            },  
            ravenclaw: {
                type: Number
            },           
            hufflepuff: {
                type: Number
            }
        }
    }
    // questionOne: {
    //     type: Number,
    //     required: true,
    //     // ref: 'user'
    // },
    // questionTwo: {
    //     type: Number,
    //     required: true,
    //     // ref: 'user'
    // },
    // questionThree: {
    //     type: Number,
    //     required: true,
    //     // ref: 'user'
    // },    
    // houseName: {
    //     type: String,
    //     required: true,
    //     // ref: 'user'
    // }
    // ,
    // questionFour: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // questionFive: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // questionSix: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // questionSeven: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // questionEight: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // questionNine: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // question10: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // },
    // answeredCorrectly: {
    //     type: Number,
    //     required: true,
    //     ref: 'user'
    // }
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;