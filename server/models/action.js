const mongoose = require('mongoose');

const { Schema } = mongoose;

const ActionSchema = new Schema({
  description: {
    type: String,
    required: [true, 'The action must have some description'],
  },
  cardId: {
    type: Schema.Types.ObjectId,
    ref: 'Card',
    required: [true, 'The comment must belong to a card'],
  },
  versionKey: false,
}, { timestamps: true });

const Action = mongoose.model('Action', ActionSchema);

module.exports = Action;
