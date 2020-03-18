require('dotenv').config()

const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('./config')
const routes = require("./routes")


const app = express();

//Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
// Serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// app.use(
//   session({
//   secret: process.env.SECRET_KEY,
//   store: new MongoStore({ mongooseConnection: dbConnection }),
//   resave: false,
//   saveUninitialized: false
//   })
// )

//Passport
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use(routes)

//db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sfw")
    .then(()=> console.log(`Mongo Connected...`))
    .catch(err => console.log(err));


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));