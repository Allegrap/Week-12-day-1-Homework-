var express = require('express');
var router = new express.Router();

var filmsRouter = require('./films.js');

router.use('/films', filmsRouter);


module.exports = router;