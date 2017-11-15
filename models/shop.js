const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy._id === 'string') return this.createdBy._id === user._id;
  return user._id === this.createdBy.toString();
};

const shopSchema = new mongoose.Schema({
  name: String,
  formatted_address: { type: String, required: true },
  email: { type: String, required: true},
  international_phone_number: { type: String, required: true},
  bio: { type: String, required: true },
  icon: { type: String, required: true },
  clothesWanted: { type: String, required: true },
  clothesNotWanted: { type: String, required: true},
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  place_id: { type: String, required: true, unique: true},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
});

shopSchema.methods.belongsTo = function shopBelongsTo(user) {
  if(typeof this.createdBy._id === 'string') return this.createdBy._id === user._id;
  return user._id === this.createdBy.toString();
};

module.exports = mongoose.model('Shop', shopSchema);
