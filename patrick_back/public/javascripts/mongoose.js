// Mongoose.js
// Carlo Jacobs
// 5-04-2019

const mongoose = require('mongoose');

const dbUrl = 'mongodb://188.166.0.103:27017/patrick';
mongoose.connect(dbUrl, {
	auth: { authSource: "admin" },
	user: 'carlo',
  pass: 'Dittoenbram1234',
  useNewUrlParser: true,
  w: 1
});


var articleSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  body: String,
  author: String,
  date: String,
  tags: Array
});

mongoose.model('article', articleSchema);