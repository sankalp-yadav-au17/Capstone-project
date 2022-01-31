const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
var {resolve} = require('path');

const app = express();
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');


app.use(express.json());


app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000;

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

const buildFolderPath = resolve(__dirname, '../client/build') 

app.use(express.static(buildFolderPath))

app.get("*", (req, res) => {
    res.sendFile(`${buildFolderPath}/index.html`)
})


app.listen(PORT, () => {
    console.log(`server is runnig at port no ${PORT}`);
})


