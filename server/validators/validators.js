const { check, oneOf } = require('express-validator');

exports.validateBoard = [check('title').not().isEmpty()];
exports.validateList = [check('title').not().isEmpty()];
exports.validateCard = [check('title').not().isEmpty(), check('listId').not().isEmpty()];
exports.validateComment = [check('comment.text').not().isEmpty(), check('cardId').not().isEmpty()];
exports.validateCardUpdate = oneOf([
  check('card.title').not().isEmpty(),
  check('card.listId').not().isEmpty(),
  check('card.position').not().isEmpty(),
  check('card.description').not().isEmpty(),
  check('card.archived').not().isEmpty(),
  check('card.dueDate').not().isEmpty(),
  check('card.completed').not().isEmpty(),
  check('card.labels').not().isEmpty(),
]);