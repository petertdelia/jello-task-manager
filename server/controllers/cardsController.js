const { validationResult } = require('express-validator');
const HttpError = require('../models/httpError');
const Card = require('../models/card');
const List = require('../models/list');

const getCard = (req, res, next) => {
  Card.findById(req.params.id).then((card) => {
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

exports.getCard = getCard;
exports.createCard = createCard;
