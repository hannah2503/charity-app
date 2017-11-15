const express = require('express');
const router  = express.Router();
// const imageUpload = require('../lib/imageUpload');
// const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');
const shops           = require('../controllers/shops');

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(secureRoute, users.index);
router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/shops')
  .get(secureRoute, shops.index)
  .post(secureRoute, shops.create);
router.route('/shops/:id')
  .get(secureRoute, shops.show)
  .put(secureRoute, shops.update)
  .delete(secureRoute, shops.delete);
router.route('/shops/:id/comments')
  .post(secureRoute, shops.createComment);
router.route('/shops/:id/comments/:commentId')
  .delete(secureRoute, shops.deleteComment);


module.exports = router;
