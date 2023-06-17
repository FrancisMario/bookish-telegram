const mongoose = require('mongoose');

// Define the Content Schema
const contentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
});

// Create the Comment model
const Content = mongoose.model('Content', contentSchema);

module.exports = contentSchema;
module.exports = Content;
