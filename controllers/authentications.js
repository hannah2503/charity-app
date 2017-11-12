const User = require('../models/user');
// const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function authenticationsLogin(req, res){
  User
    .findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) res.status(401).json({ message: 'Unauthorized.' });
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1hr' });

      return res.status(200).json({
        message: 'Good to see you again ${user.username}!',
        token,
        user
      });
    })
    .catch(() => res.status(500).json({ message: 'Woops, something went wrong.' }));
}


function authenticationsRegister(req, res){
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1hr' });

      return res.status(201).json({
        message: `Hey there ${user.username}!`,
        token,
        user
      });
    })
    .catch(() => res.status(500).json({ message: 'Woops, something went wrong!' }));
}


module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};
