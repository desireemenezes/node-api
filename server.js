const express = require('express');
const mongoose = require('mongoose');

//init app
const app = express()
const port = 3000

// init Db
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

// first route
app.get('/', (req, res) => {
    res.send('Hello World! ')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })