const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db
mongoose.connect("mongodb://localhost/sfw")
    .then(()=> console.log(`Mongo Connected...`))
    .catch(err => console.log(err));


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));