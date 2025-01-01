// import express
var express = require('express');

// import ejs
var ejs = require('ejs');

// import mysql module
// var mysql = require('mysql2');

// import express session
var session = require('express-session');

// import express validator
var validator = require('express-validator');

// create the express application object
const app = express();
const port = 8000;
const router = express.Router();

const path = require('path');

// create an input sanitizer
const expressSanitizer = require('express-sanitizer');
app.use(expressSanitizer());

// create a session
app.use(session({
    secret: 'somerandomstuff',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

// set up the body parser 
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'views')));

// tell express that we want to use ejs as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set up public folder (for css and statis js)
app.use(express.static(__dirname + '/public'))

app.use('/assets', express.static('assets'));

// router.get('/play', function(req, res, next){
//     res.render('play.ejs')
// })

app.get('/play', (req, res) => {
    res.render('play.ejs')
})

// Define the database connection
// const db = mysql.createConnection ({
//     host: 'localhost',
//     user: 'pawsitive_app',
//     password: 'qwertyuiop',
//     database: 'pawsitive'
// })
// Connect to the database
// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Connected to database')
// })
// global.db = db

// define the application-specific data (name)
app.locals.gameData = {gameName: "Pawsitive"}

// load the route handlers
// const mainRoutes = require("./routes/main")
// app.use('/', mainRoutes)

// load the route handler for index.ejs
app.get('/', (req, res) => {
    res.render('index');
})
// app.get('/wadrobe', (req, res) => {
//     res.send()
// })

// // load the route handlers for /players
// const playersRoutes = require('./routes/players')
// app.use('/players', playersRoutes)

// // load the route handlers for /games
// const gamesRoutes = require('./routes/games')
// app.use('/games', gamesRoutes)

// // load the route handlers for weather
// const weatherRoutes = require('./routes/weather')
// app.use('/', weatherRoutes)

// // load the route handlers for games api
// const apiRoutes = require('./routes/api')
// app.use('/api', apiRoutes)

// // load the route handlers for freetogame open api
// const freetogameRoutes = require('./routes/freetogame');
// app.use('/freetogame', freetogameRoutes);

// start the web app listening
app.listen(port, () => console.log(`Node app listening on port ${port}!`))