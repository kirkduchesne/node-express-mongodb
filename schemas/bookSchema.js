const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  comments: [{ name: String, text: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
