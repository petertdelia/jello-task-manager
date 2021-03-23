const mongoose = require('mongoose');

const { Schema } = mongoose;

const CardSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, 'The Card must have a title'],
  },
  description: String,
  labels: [ { type: String } ],
  listId: Number,
  position: Number, // Are we sure what this is?
  archived: Boolean,
  createdAt: Date,
  updatedAt: Date,
  dueDate: Date,
  completed: Boolean,
  boardId: Number,
  comments: [ { type: String } ], // add comments schema later
  actions: [
    {
      _id: Number,
      description: String,
      createdAt: Date,
      updatedAt: Date,
      cardId: Number
    }
  ]
})

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;