const mongoose = require('mongoose');

const { Schema } = mongoose;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The List must have a title'],
  },
  position: Number,
  boardId: { type: Schema.Types.ObjectId, ref: 'Board' },
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
}, { timestamps: true }) // gives us createdAt and updatedAt


const List = mongoose.model('List', ListSchema);

module.exports = List;