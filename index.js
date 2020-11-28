'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/animals', (req, res) => {
  console.log('call to api/animals received');
  //this list should be stored in a database
  var response = [
    {"id":1,"name":"raven"},
    {"id":2,"name":"wolf"},
    {"id":3,"name":"deer"},
    {"id":4,"name":"rabbit"},
    {"id":5,"name":"owl"},
    {"id":6,"name":"fox"},
    {"id":7,"name":"bear"},
    {"id":8,"name":"lynx"}
  ];
  res.json(response);
})

app.listen(8080);
//app.listen(process.env.port);
console.log('Listening on port 8080');
