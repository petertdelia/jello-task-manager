const { validationResult } = require('express-validator');
const Board = require('../models/board');
const List = require('../models/list');
const Card = require('../models/card');
const HttpError = require('../models/httpError');

const getBoards = (req, res, next) => {
  Board.find({}, 'title _id createdAt updatedAt')
    .then((boards) => {
      res.json({
        boards,
      });
    });
};

const getBoard = (req, res, next) => {
  Board.findOne({ _id: req.params.id })
    .populate({
      path: 'lists',
      populate: {
        path: 'cards',
        model: 'Card'
      }
    })
    .then((board) => {
      res.json({ board });
    })
    .catch((err) => next(new HttpError('There is no board having that ID, please try again', 404)));
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body)
      .then((board) => {
        Board.find({ _id: board._id }, 'title _id createdAt updatedAt').then((board) => res.json({ board }));
      })
      .catch((err) => next(new HttpError('Creating board failed, please try again', 500)));
  } else {
    return next(new HttpError('The input field is empty.', 404));
  }
};

exports.getBoards = getBoards;
exports.getBoard = getBoard;
exports.createBoard = createBoard;