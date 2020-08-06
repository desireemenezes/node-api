const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// init app
const app = express()
const port = 3001
app.use(express.json());

// init Db
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useUnifiedTopology: true , useNewUrlParser: true });

requireDir('./src/models');

//route
app.use("/api", require("./src/routes"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});