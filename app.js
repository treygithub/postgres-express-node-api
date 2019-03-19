const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3001;
const Sequelize = require('sequelize');

//controllers
const routeController = require('./routes/gigs');

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

app.get('/',(req,res)=>{res.send('hello welcome to my test app')});

app.get('/speak/pig',(req,res)=>{
   let message = "the pig says Moooo";
    res.status(200).send(message)
});

app.get('/speak/cow', (req,res)=>{
    let message = "the Cow says Bark Bark";
    res.status(200).send(message)
});

app.get('/repeat/:id/:num',(req,res)=>{
  let id = req.params.id;
  let num = req.params.num;
  num = parseInt(num)
  let h = [];
  let printParams = (()=>{
    for(let i = 0; i < num; i++){
     h.push(id);
    }
  })();
  let html = h.map((e,i)=>{
    console.log('index is :', i, e)
  })
  
  res.status(200).send(html)
})

//endpoints
app.use('/gigs',routeController);

app.listen(PORT,()=>{console.log(`Server Running on Port: ${PORT}`)});