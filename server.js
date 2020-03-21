require('dotenv').config()

const path = require('path');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const routes = require("./routes");

const app = express();

//Passport Config
require('./passport/passport')(passport);

//Middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// Serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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

//Flash
app.use(flash());

//Routes
app.use(routes)

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

//db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sfw", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log(`Mongo Connected...`))
    .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}`));