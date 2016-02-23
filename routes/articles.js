var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Article = require('../models/article');

// set up the GET handler for the main articles page
router.get('/', function(req, res, next) {
    // use the article model to query the articles collection in the db

    // use the Article model to retrieve all articles
    Article.find(function (err, articles) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // we got data back
            // show the view and pass the data to it
            res.render('articles/index', {

                title: 'Articles',
                articles: articles
            });
        }
    });
});

// make public
module.exports = router;
