const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createComment = {
  body: Joi.object().keys({
    contentId: Joi.string().custom(objectId).required(),
    text: Joi.string().required(),
    // Add additional fields specific to your comment model
  }),
};

const updateComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    text: Joi.string().required(),
    // Add additional fields specific to your comment model
  }),
};

module.exports = {
  createComment,
  updateComment,
};
