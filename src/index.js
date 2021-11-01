const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const boardController = require('./controllers/board.controller');

app.use('/board', boardController);



module.exports = app;