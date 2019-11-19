require('dotenv').config()
const express = require('express');
const mysql = require('mysql');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: process.env.password,
    database: 'sunnona'
  }
});

const app = express();




app.listen('4000', () => {
  console.log('server is running at 4000');
})