const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Listening on port ${process.env.APP_PORT}`)
});

app.use(express.static(path.join(__dirname, 'public')))