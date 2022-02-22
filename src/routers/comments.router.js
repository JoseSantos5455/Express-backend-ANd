const express = require('express');
const { check } = require('express-validator');
const auth = require('../middleware/auth');
const checkOwnership = require('../middleware/checkOwnership');
const commentsController = require('../controllers/comments.controller');

const router = express.Router();

/** @route      GET /api/posts/comments/:id
 *  @desc       fetch all comments of a post
 */
router.route(':id')
  .get(commentsController.getComments);

/** @route      POST /api/posts/comments/:id
 *  @desc       add a comment to a post
 */
router.route('/:id')
  .post(
    auth,
    check('body', 'Comment is required').not().isEmpty(),
    commentsController.addComment,
  );

/** @route      DELETE /api/posts/comments/:id
 *  @desc       delete a comment to a post
 */
router.route(':id')
  .delete(
    auth,
    checkOwnership,
    commentsController.deleteComment
  );

module.exports = router;
