const { validationResult } = require('express-validator');
const HttpError = require('../models/httpError');
const Card = require('../models/card');
const List = require('../models/list');

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

module.exports = {
  getCard,
  createCard,
  deleteCard,
  addCommentToCard,
  updateCard,
};
