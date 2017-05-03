var express = require('express');
var router = express.Router();
const passport = require('passport');
const controller = require('../controllers/index');

/* GET home page. */
router.get('/', controller.login);
router.post('/signin',passport.authenticate('local', { session : false  }), controller.signin)

module.exports = router;
