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
  formatted_address: { type: String },
  email: { type: String},
  international_phone_number: { type: String},
  bio: { type: String},
  icon: { type: String },
  clothesWanted: { type: String},
  clothesNotWanted: { type: String},
  lat: { type: Number },
  lng: { type: Number},
  place_id: { type: String},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
});

shopSchema.methods.belongsTo = function shopBelongsTo(user) {
  if(typeof this.createdBy._id === 'string') return this.createdBy._id === user._id;
  return user._id === this.createdBy.toString();
};

module.exports = mongoose.model('Shop', shopSchema);
