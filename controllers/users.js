const User = require('../models/user');

function usersIndex(req, res) {
  User.find()
    .exec()
    .then((users) =>
      res.status(200).json(users))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersShow(req, res) {
  User.findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'user not found' });
      return res.status(200).json(user);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersUpdate(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'user not found' });
      return res.status(200).json({ user });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function usersDelete(req, res) {
  User.findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(200).json({ message: 'user successfully deleted!' });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
