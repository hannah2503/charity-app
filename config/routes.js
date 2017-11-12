const express = require('express');
const router  = express.Router();
const imageUpload = require('../lib/imageUpload');
// const oauth = require('../controllers/oauth');
// const secureRoute = require('../lib/secureRoute');
const authentications = require('../controllers/authentications');
const users           = require('../controllers/users');

router.route('/register')
  .post(authentications.register);
router.route('/login')
  .post(authentications.login);

router.route('/users')
  .get(users.index);
router.route('/users/:id')
  .get(users.show)
  // .all(secureRoute)
  .put(imageUpload, users.update)
  .delete(users.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
