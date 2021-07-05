const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const { initializeDBConnection } = require("./db/db.connect.js")

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors())

initializeDBConnection();

app.get('/', (req, res) => {
  res.json({name: 'What is JS?', age: 23, address: 'Bangalore'})
});

app.listen(PORT, () => {
  console.log('server started');
});