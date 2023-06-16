const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const checkOwnership = require('./../../middlewares/checkOwnership')
const commentValidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

const ownershipMiddleware = checkOwnership('comment');

router
  .route('/')
  .post(auth('createComment'), validate(commentValidation.createComment), commentController.createComment);


router
  .route('/:commentId')
  .patch(auth('updateComment'), ownershipMiddleware, validate(commentValidation.updateComment), commentController.updateComment)
  .delete(auth('deleteComment'), ownershipMiddleware, validate(commentValidation.deleteComment), commentController.deleteComment);

module.exports = router;
