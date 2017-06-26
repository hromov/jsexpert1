var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GalleryItem = new Schema({
  url: {
    type: String,
    default: '',
    trim: true,
    required: 'Url couldn\'t be empty'
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name couldn\'t be empty'
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  popular: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('GalleryItem', GalleryItem);


