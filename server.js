require('dotenv').config()

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('./passport')
const routes = require("./routes")


const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(
  session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
  })
)

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use(routes)

//db
mongoose.connect("mongodb://localhost/sfw")
    .then(()=> console.log(`Mongo Connected...`))
    .catch(err => console.log(err));


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));