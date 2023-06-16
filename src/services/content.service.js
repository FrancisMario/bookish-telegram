const httpStatus = require('http-status');
const { Content } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a content
 * @param {Object} contentBody
 * @returns {Promise<Content>}
 */
const createContent = async (contentBody) => {
  return Content.create(contentBody);
};

/**
 * Get content by id
 * @param {ObjectId} id
 * @returns {Promise<Content>}
 */
const getContentById = async (id) => {
  return Content.findById(id);
};

/**
 * Update content by id
 * @param {ObjectId} contentId
 * @param {Object} updateBody
 * @returns {Promise<Content>}
 */
const updateContentById = async (contentId, updateBody) => {
  const content = await getContentById(contentId);
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }
  Object.assign(content, updateBody);
  await content.save();
  return content;
};

/**
 * Delete content by id
 * @param {ObjectId} contentId
 * @returns {Promise<Content>}
 */
const deleteContentById = async (contentId) => {
  const content = await getContentById(contentId);
  if (!content) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Content not found');
  }
  await content.remove();
  return content;
};

module.exports = {
  createContent,
  getContentById,
  updateContentById,
  deleteContentById,
};
