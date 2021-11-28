const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    title: {
        type: String
    },
    correctAnswer: {
        type: String,
    },
    answer:[
        
    ]
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports = Question;