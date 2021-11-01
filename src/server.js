const express = require('express');
const mongoose = require('mongoose');

const connect = require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, async () => {
    await connect();
    console.log("App is listening on Port 5000...");
});