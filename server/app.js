const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
const port = 8000; // Define your desired port

// Middleware to parse JSON requests
app.use(express.json(), cors());

const uri = process.env.MONGODB_URI; // MongoDB URI from .env file

// Connecting MongoDB
mongoose.connect(uri);
const db = mongoose.connection;

db.once('open', () => console.log("Connected"));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express app!');
});

// User Route
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute, cors());

// Post Route
const postRoute = require('./routes/postRoute');
app.use('/post', postRoute, cors());

// Comment Route
const commentRoute = require('./routes/commentRoute');
app.use('/comment', commentRoute, cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
