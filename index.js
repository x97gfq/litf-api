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
    {"id":1,"name":"raven","eyes":"blinking_eyes_test.gif","image":"raven.jpg","sound":"raven.wav"},
    {"id":2,"name":"wolf","eyes":"blinking_eyes_test.gif","image":"wolf.jpg","sound":"wolf.wav"},
    {"id":3,"name":"deer","eyes":"blinking_eyes_test.gif","image":"deer.jpg","sound":"deer.wav"},
    {"id":4,"name":"rabbit","eyes":"blinking_eyes_test.gif","image":"rabbit.jpg","sound":"rabbit.wav"},
    {"id":5,"name":"owl","eyes":"blinking_eyes_test.gif","image":"owl.jpg","sound":"owl.wav"},
    {"id":6,"name":"fox","eyes":"blinking_eyes_test.gif","image":"fox.jpg","sound":"fox.wav"},
    {"id":7,"name":"bear","eyes":"blinking_eyes_test.gif","image":"bear.jpg","sound":"bear.wav"},
    {"id":8,"name":"lynx","eyes":"blinking_eyes_test.gif","image":"lync","sound":"lynx.wav"}
  ];
  res.json(response);
})

app.listen(8080);
//app.listen(process.env.port);
console.log('Listening on port 8080');
