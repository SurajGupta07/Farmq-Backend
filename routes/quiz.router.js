const express = require('express');
const router = express.Router();
const { Quiz } = require("../models/quiz.model")

router.route("/")
.get(async (req, res) => {
  try{
    const quizes = await Quiz.find({})
    res.json({success: true, quizes})
  }
  catch(err) {
    res.status(401).json({ success: false, message: "Unable to get quiz list", err })
  }
})

.post(async (req, res) => {
  try{
    const quiz = req.body;
    const NewQuizItem = new Quiz(quiz);
    const savedQuiz = await NewQuizItem.save();
    res.json({success: true, savedQuiz})
  }
  catch(err) {
    res.status(500).json({ success: false, message: 'unable to get quiz items', err })
  }
})

module.exports = router;