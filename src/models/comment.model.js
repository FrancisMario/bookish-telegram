const mongoose = require('mongoose');

// Define the Comment Schema
const commentSchema = new mongoose.Schema({
  content: {
    type: contentSchema,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  upvotes: {
    type: Number,
    default: 0
  },
  downvotes: {
    type: Number,
    default: 0
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment' // Reference to sub-comments
  }]
});

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
