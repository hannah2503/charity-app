const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const shopSchema = new mongoose.Schema({
  name: String,
  address: {
    line1: { type: String, required: true },
    line2: String,
    city: { type: String, required: true },
    postcode: { type: String, required: true },
    country: { type: String, required: true }
  },
  email: { type: String, required: true, unique: true },
  number: { type: Number, required: true, unique: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
  clothesWanted: { type: String, required: true },
  clothesNotWanted: { type: String, required: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});

shopSchema.methods.belongsTo = function shopBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

module.exports = mongoose.model('Shop', shopSchema);
