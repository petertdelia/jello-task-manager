const { validationResult } = require('express-validator');
const HttpError = require('../models/httpError');
const Card = require('../models/card');

const getCard = (req, res, next) => {
  Card.findById(req.params.id).then((card) => {
    res.json(card);
  }).catch((err) => {
    next(new HttpError('There is no card having that ID, please try again', 404));
  });
};

const createCard = (req, res, next) => {
  // TODO add card to list
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Card.create(req.body).then((card) => {
      req.card = card;
      next();
    }).catch((err) => {
      next(new HttpError('Error creating card, please try again', 404));
    });
  } else {
    next(new HttpError('Error creating card, please try again', 404));
  }
};

exports.getCard = getCard;
exports.createCard = createCard;
