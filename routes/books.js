const express = require('express');
const router = express.Router();
const Book = require('../schemas/bookSchema');

router.get('/', (req, res) => {
    res.send('We are in the books homepage.');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`You searched for the book with id: ${id}`);
});

router.post('/newbook', (req, res) => {
    const newBook = new Book({
        title: req.params.title,
        author: req.params.author,
    });
    newBook.save()
    .then(() => console.log('Success!'))
    .catch(err => console.log('Oops', err));
});

module.exports = router;