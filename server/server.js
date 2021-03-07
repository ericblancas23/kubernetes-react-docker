const { json } = require('express');
const express = require('express');
const connectToDB = require('./database/db');
require('dotenv').config();
const app = express();

app.use(express.json())

connectToDB();

const PORT = process.env.PORT || 5000;

app.get('/test', (req, res) => {
    res.json({
        hi: "testing"
    })
})

app.listen(PORT, () => {
    console.log('server is working')
})