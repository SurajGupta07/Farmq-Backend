const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: "Cannot enter without question"
  },
  optionOne: {
    type: String
  },
    optionTwo: {
    type: String
  },
    optionThree: {
    type: String
  },
    isRight: {
      type: String
    }
},
{
  timestamps: true,
})

const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = { Quiz }