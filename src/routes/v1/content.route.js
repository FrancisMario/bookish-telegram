const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const checkOwnership = require('./../../middlewares/checkOwnership')
const contentValidation = require('../../validations/content.validation');
const contentController = require('../../controllers/content.controller');

const router = express.Router();

const ownershipMiddleware = checkOwnership('content');

router
  .route('/')
  .post(auth('createContent'), validate(contentValidation.createContent), contentController.createContent)
  .get(auth('getContent'), validate(contentValidation.getContents), contentController.getContents);

router
  .route('/:contentId')
  .get(auth('getContent'), validate(contentValidation.getContent), contentController.getContent)
  .patch(auth('updateContent'), ownershipMiddleware, validate(contentValidation.updateContent), contentController.updateContent)
  .delete(auth('deleteContent'), ownershipMiddleware, validate(contentValidation.deleteContent), contentController.deleteContent);

module.exports = router;
