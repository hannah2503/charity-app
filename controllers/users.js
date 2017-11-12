const User = require('../models/user');

function usersIndex(req, res) {
  User
    .find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: usersIndex
};
