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
    .then((board) => {
      res.json({ board });
    })
    .catch((err) => next(
      new HttpError('There is no board having that ID, please try again', 404),
    ));
};

const createList = (req, res, next) => {
  console.log(req.body);

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    List.create(req.body)
      .then((board) => {
        List.find(
          { _id: board._id },
          'title _id createdAt updatedAt',
        ).then((board) => res.json({ board }));
      })
      .catch((err) => next(new HttpError('Creating title failed, please try again', 500)));
  } else {
    return next(new HttpError('The input field is empty.', 404));
  }
};

const updateList = (req, res, next) => {

};

exports.getLists = getLists;
exports.getList = getList;
exports.createList = createList;
exports.updateList = updateList;
