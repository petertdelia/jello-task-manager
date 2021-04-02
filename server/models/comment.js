const mongoose = require('mongoose');

const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: {
    type: String,
    required: [true, 'The comment must have some text'],
  },
  cardId: { type: Schema.Types.ObjectId, ref: 'Card', required: [true, 'The comment must belong to a card'] },
  versionKey: false,
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;