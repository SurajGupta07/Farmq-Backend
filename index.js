const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const { initializeDBConnection } = require("./db/db.connect")
const quizRouter = require("./routes/quiz.router.js") 

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors())

initializeDBConnection();

app.use('/quiz', quizRouter)

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Farmq Backend' })
});

app.listen(PORT, () => {
  console.log('server started');
});