const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Comment } = require('../models/comment.model');
const { Content } = require('../models/content.model');

const checkOwnership = (modelType) => async (req, res, next) => {
  try {
    // Get the model ID from the request parameters
    const { modelId } = req.params;

    // Check if the user is authenticated
    if (!req.user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate');
    }

    // Get the user ID from the authenticated user object
    const userId = req.user.id;

    // Retrieve the model from the database
    let model;

    if (modelType === 'comment') {
      model = await Comment.findById(modelId);
    } else if (modelType === 'content') {
      model = await Content.findById(modelId);
    }

    // Check if the model exists
    if (!model) {
      throw new ApiError(httpStatus.NOT_FOUND, `${modelType} not found`);
    }

    // Check if the user owns the model
    if (model.userId !== userId) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
    }

    // If the user owns the model, proceed to the next middleware
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkOwnership;
