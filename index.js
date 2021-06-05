//Import books route
const books = require('./routes/books');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
//app.use(cors());

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })
    .then(() => console.log('Connected to database.'))
    .catch((err) => console.log(err));

//Books route
app.use('/books', books);

app.get('/', (req, res) => {
    res.send('Welcome to the homepage.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    try {
        console.log(`Listening on port: ${PORT}`);
    } catch (err) {
        console.log(err);
    }
});