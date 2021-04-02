const { validationResult } = require('express-validator');
const Comment = require('../models/comment');

const createComment = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { cardId } = req.body;
    const { text } = req.body.comment;
    Comment.create({ cardId, text }).then((comment) => {
      req.comment = comment;
      next();
    }).catch(() => {
      next(new HttpError('Error creating comment, please try again', 404));
    });
  } else {
    next(new HttpError('Error creating comment, please try again', 404));
  }
};

module.exports = { createComment };
