const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createContent = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    // Add additional fields specific to your content model
  }),
};

const updateContent = {
  params: Joi.object().keys({
    contentId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    // Add additional fields specific to your content model
  }),
};

module.exports = {
  createContent,
  updateContent
};
