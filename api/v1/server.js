//import express
const express = require('express');

//import bodyParser
const bodyParser = require("body-parser");

//import dotenv for environment variable management
const dotenv = require('dotenv');
dotenv.config();

const appRouter = require("./src/route");

// initialize express
const app = express();

//configure body-parser for express
app.use(bodyParser.json({extended : true}));

//routers
app.use(appRouter);

//provide a port to listen to
const PORT = process.env.PORT || 4000;

// start the server

app.listen(PORT , ()=>{
    console.log(`Listening on http://localhost${PORT}`)
})
