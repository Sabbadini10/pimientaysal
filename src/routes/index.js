var express = require('express');
var router = express.Router();

/* GET home page. */
const {index, detalle} = require('../controllers/indexControllers')

/* GET home page. */
router
    .get('/', index)
    .get('/detalle/:id', detalle)

module.exports = router;  