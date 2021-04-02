import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createComment,
} from '../../../actions/CardsActions';

const CommentForm = ({ card }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');

  const handleSaveComment = () => {
    dispatch(
      createComment({ cardId: card._id, comment: { text: newComment } }),
    );
  };

  return (
    <li className="comment-section">
      <h2 className="comment-icon icon">Add Comment</h2>
      <div>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <div className="comment">
          <label>
            <textarea
              required=""
              rows="1"
              placeholder="Write a comment..."
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div>
              <a className="light-button card-icon sm-icon" />
              <a className="light-button smiley-icon sm-icon" />
              <a className="light-button email-icon sm-icon" />
              <a className="light-button attachment-icon sm-icon" />
            </div>
            <div>
              <input
                type="submit"
                className="button"
                value="Save"
                onClick={handleSaveComment}
              />
            </div>
          </label>
        </div>
      </div>
    </li>
  );
};

export default CommentForm;
