const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const boardController = require('./controllers/board.controller');
const bookController=require('./controllers/book.controller');

app.use('/board', boardController);
app.use('/books',bookController);



module.exports = app;