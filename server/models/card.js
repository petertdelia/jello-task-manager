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
  listId: { type: Schema.Types.ObjectId, ref: 'List' },
  position: Number,
  archived: Boolean,
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
}, { timestamps: true })

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;