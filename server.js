//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Song = require('./Models/schema.js');
const data = require('./Models/data.js');
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('Public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000
// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });

//<---Seed Route--->
// app.get('/suncode/seed', (req, res) => {
//   //tells it to create documents in that budget section.
//   Song.create(data, (err, data) => {
//     // res.send(data)
//     res.redirect('/suncode')
//   })
// })

//<---Delete Route--->
//link this to a button

//<---Edit Route--->

//<---Index Route--->
app.get('/suncode', (req, res) => {
  res.send('index.ejs');
});
//
// //<---New Route--->
// app.get('/suncode/new', (req, res) => {
//     res.render('new.ejs');
//   });
//
// //<---Create Route--->
// app.post('/suncode', (req, res) => {
//   Song.create(req.body, (err, createdSong) => {
//     res.redirect('/suncode')
//   });
// });
//
// //<---Show Route--->
// app.get('/suncode/show', (req,res) => {
//     res.render('show.ejs')
//   });
//
//
// app.get('/suncode/results', (req,res) => {
//   //This finds based on key-value pair (energy: __), but we don't know key-value pair until user inputs it. So how to get it to listen properly & return results page.
//     Song.find({}, (err, foundSong) => {
//       res.render
//       ('results.ejs',
//         {
//           song: foundSong
//         });
//     })
//   });

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
