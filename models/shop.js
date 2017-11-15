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
  // name: String,
  // formatted_address: {type: String, required: true, unique: true
  // },
  // lon: {type: String, required: true},
  // lat: {type: String, required: true},
  // email: { type: String, required: false, unique: true },
  // formatted_phone_number: { type: String, required: true, unique: true },
  // bio: { type: String },
  // image: { type: String },
  // clothesWanted: { type: String, required: true },
  // clothesNotWanted: { type: String, required: true},
  // createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  // comments: [ commentSchema ]
  address: {type: String, required: true},
  website: { type: String },
  lat: { type: String },
  lng: { type: String },
  name: { type: String },
  id: { type: String },
  email: { type: String },
  number: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
});

shopSchema.methods.belongsTo = function shopBelongsTo(user) {
  if(typeof this.createdBy._id === 'string') return this.createdBy._id === user._id;
  return user._id === this.createdBy.toString();
};

module.exports = mongoose.model('Shop', shopSchema);
