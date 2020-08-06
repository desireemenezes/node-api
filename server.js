const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// init app
const app = express()
const port = 3001
app.use(express.json());
app.use(cors());

// init Db
mongoose.connect("mongodb://localhost:27017/nodeapi",{ useUnifiedTopology: true , useNewUrlParser: true });

requireDir('./src/models');

//route
app.use("/api", require("./src/routes"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});