var express = require('express');
var router = express.Router();

const collection = require('../controllers/user')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', collection.create)
// router.delete('/:id', collection.create)
// router.get('/:id', collection.create)

module.exports = router;
