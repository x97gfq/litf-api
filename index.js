'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/characters', (req, res) => {
  console.log('call to api/characters received');
  var response = [{"id":1,"name":"bird"},{"id":1,"name":"wolf"},{"id":1,"name":"bear"}];
  res.json(response);
})

app.listen(8080);
//app.listen(process.env.port);
console.log('Listening on port 8080');
