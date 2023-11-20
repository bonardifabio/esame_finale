const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const utentiRouter = require("./routers/utenti.routers.js");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB database!');
});

app.use(cors({
    origin: '*',
    credentials: true
  }));
  
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', function(req,res,next){
    console.log(req.method, req.body);
    next();
});

app.use('/utenti',utentiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("Server avviato nella porta: " + PORT);
});
