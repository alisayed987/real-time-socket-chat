const app = require('express')();
require('dotenv').config()

app.listen(process.env.APP_PORT, ()=> {
    console.log(`Listening on port ${process.env.APP_PORT}`)
});

