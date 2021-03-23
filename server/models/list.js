const mongoose = require('mongoose');

const { Schema } = mongoose;

const ListSchema = new Schema({
  _id = Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, 'The List must have a title'],
  },
  position: Number,
  boardId: Number,
  createdAt: Date,
  updatedAt: Date
})

const List = mongoose.model('List', ListSchema);

module.exports = List;