const HttpError = require('../models/httpError');
const Card = require('../models/card');

const getCard = (req, res) => {
  Card.findById(req.params.id).then((card) => {
    res.json(card);
  }).catch((err) => {
    next(new HttpError('There is no card having that ID, please try again', 404));
  });
};

exports.getCard = getCard;
