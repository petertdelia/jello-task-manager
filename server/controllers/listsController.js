const { validationResult } = require('express-validator');
const Board = require('../models/board');
const List = require('../models/list');
const Card = require('../models/card');
const HttpError = require('../models/httpError');

const getLists = (req, res, next) => {
  List.find({}, 'title _id createdAt updatedAt').then((boards) => {
    res.json({
      boards,
    });
  });
};

const getList = (req, res, next) => {
  List.findOne({ _id: req.params.id })
    .populate({
      path: 'lists',
      populate: {
        path: 'cards',
        model: 'Card',
      },
    })
    .then((lists) => {
      res.json({ lists });
    })
    .catch((err) => next(
      new HttpError('There is no board having that ID, please try again', 404),
    ));
};

const createList = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    List.create(req.body)
      .then(async (list) => {
        req.list = list;
        next();
      })
      .catch((_) => next(new HttpError('Creating title failed, please try again', 500)));
  } else {
    return next(new HttpError('The input field is empty.', 404));
  }
};

const updateList = async (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const list = await List.findById(req.body._id);
    if (!list) res.json({ error: "Can't find list with that ID" }).status(404);

    list.title = req.body.title;

    list.save().then((list) => {
      res.json(list);
    }).catch((err) => next(new HttpError('Unable to save list.', 404)));
  } else {
    return next(new HttpError('Error whilst creating list.', 404));
  }
};

const addCardToList = (req, res, next) => {
  const { card } = req;

  List.findById(card.listId).then((list) => {
    list.cards = list.cards.concat(card);

    list.save().then(() => {
      console.log(card);
      res.json(card);
    }).catch((err) => next(new HttpError('Unable to save card to list.', 404)));
  }).catch((err) => next(new HttpError('Unable to find list.', 404)));
};

exports.getLists = getLists;
exports.getList = getList;
exports.createList = createList;
exports.updateList = updateList;
exports.addCardToList = addCardToList;
