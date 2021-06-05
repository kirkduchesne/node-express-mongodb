const express = require('express');
const router = express.Router();
const Book = require('../schemas/bookSchema');

router.get('/', (req, res) => {
    Book.findOne({'author': 'Kirk Duchesne'}), (err, book) => {
        if (err) {console.log(err)};
        res.status(200).json(book);
    }
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`You searched for the book with id: ${id}`);
});

router.post('/newbook', (req, res) => {
        let comments = req.params.comments;
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            comments: comments,
        });
        newBook.save()
        .then(() => console.log('Success!'))
        .then(() => res.status(200).json({'author': req.body.author}))
        .catch(err => console.log('Oops', err));
});

module.exports = router;