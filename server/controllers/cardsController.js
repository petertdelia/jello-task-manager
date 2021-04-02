const { validationResult } = require('express-validator');
const HttpError = require('../models/httpError');
const Card = require('../models/card');
const List = require('../models/list');
const Action = require('../models/action');

const getCard = (req, res, next) => {
  Card.findById(req.params.id).populate({ path: 'comments' }).then((card) => {
    res.json(card);
  }).catch(() => {
    next(new HttpError('There is no card having that ID, please try again', 404));
  });
};

const createCard = async (req, res, next) => {
  // TODO add card to list
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { listId } = req.body;
    const { boardId } = await List.findById(listId).exec();

    Card.create({ ...req.body, boardId }).then((card) => {
      req.card = card;
      next();
    }).catch(() => {
      next(new HttpError('Error creating card, please try again', 404));
    });
  } else {
    next(new HttpError('Error creating card, please try again', 404));
  }
};

const deleteCard = async (req, res, next) => {
  const card = Card.findById(req.params.id);
  card.remove().then((data) => {
    res.json(data);
  }).catch((err) => next(new HttpError(err, 404)));
};

const addCommentToCard = (req, res, next) => {
  const { comment } = req;

  Card.findById(comment.cardId).then((card) => {
    card.comments = card.comments.concat(comment);

    card.save().then(() => {
      res.json(comment);
    }).catch(() => next(new HttpError('Unable to save comment to card.', 404)));
  }).catch(() => next(new HttpError('Unable to find card.', 404)));
};

const updateCard = (req, res, next) => {
  const filter = { _id: req.params.id };
  const update = { ...req.body.card };
  update.actions = [req.actionID];
  const opts = { returnOriginal: false };

  // update.actions = ['changed the background of this board'];

  Card.findOneAndUpdate(filter, update, opts).then((card) => {
    Card.findById(card._id)
      .populate({ path: 'comments' })
      .then((card) => {
        res.json(card);
      });
  });
};

// - Due date was changed
// - Due date was added

// - Due date was removed

// - Completion status was changed
// - Card was moved to a different list
// - Card was archived
// - Card was sent back to the board from the archive

const addAction = (req, res, next) => {
  const { body } = req;

  const card = Card.findById(req.params.id);
  const action = {};
  action.cardId = card._id;

  if (body.dueDate && card.dueDate) {
    // changed duedate
    action.description = 'changed the due date';
  }

  if (body.dueDate && !card.dueDate) {
    // added duedate
    action.description = 'added a due date';
  }

  if (body.completed) {
    // marked completed
    action.description = 'marked this card as completed';
  }

  if (body.completed === false) {
    // marked as uncompleted
    action.description = 'marked this card as uncompleted';
  }

  if (body.listId && body.listId !== card.listId) {
    // Changed lists
    action.description = 'moved this card to a different list';
  }

  if (body.archived) {
    // archived
    action.description = 'archived this card';
  }

  if (body.archived === false) {
    // sent back to board
    action.description = 'sent this card back to the board';
  }

  console.log(action);

  Action.create(action).then((act) => {
    req.actionID = act._id;
    next();
  });
};

module.exports = {
  getCard,
  createCard,
  deleteCard,
  addCommentToCard,
  updateCard,
  addAction,
};
