const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const Sequelize = require('sequelize');

const db = require('./config/database');

//test db
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

app.get('/',(req,res)=>{res.send('INDEX')});

app.listen(PORT,()=>{console.log(`Server Running on Port: ${PORT}`)});