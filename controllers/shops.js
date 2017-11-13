const Shop = require('../models/shop');

function shopsIndex(req, res) {
  Shop
    .find()
    .exec()
    .then(shops => res.status(200).json(shops))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function shopsShow(req, res) {
  Shop
    .findById(req.params.id)
    .exec()
    .then(shop => {
      if (!shop) return res.status(404).json({ message: 'Shop not found.' });
      return res.status(200).json(shop);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function shopsUpdate(req, res) {
  Shop
    .findByIdAndUpdate(req.params.id, req.body.shop, { new: true, runValidators: true })
    .exec()
    .then(shop => {
      if (!shop) return res.status(404).json({ message: 'Shop not found.' });
      return res.status(200).json({ shop });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function shopsDelete(req, res) {
  Shop
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(shop => {
      if (!shop) return res.status(404).json({ message: 'Shop not found.' });
      return res.sendStatus(204);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: shopsIndex,
  show: shopsShow,
  update: shopsUpdate,
  delete: shopsDelete
};
