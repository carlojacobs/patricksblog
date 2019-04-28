var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

var Article = mongoose.model('article');

// Get all articles
router.get('/all', (req, res, next) => {
  Article.find((err, articles) => {
    res.send(articles);
    res.end();
  });
});

// Get article by ID
router.get('/article/:id', (req, res, next) => {
  var id = req.params.id;
  Article.findById(id, (err, article) => {
    if (err) {
      res.send(err);
      res.end();
    }
    if (article) {
      res.send(article);
      res.end()
    }
  });
});

// Create new article
router.post('/create', (req, res, next) => {
  const password = "patrick4321!";
  const passwordCandidate = req.body.password;
  if (password !== passwordCandidate) {
    res.send("Unauthorized");
    res.end();
  }
  var article = req.body.article;
  const newArticle = Article({
    title: article.title,
    subtitle: article.subtitle,
    body: article.body,
    author: article.author,
    date: article.date
  });
  newArticle.save().then(() => {
    res.send(newArticle);
  });
});

module.exports = router;
