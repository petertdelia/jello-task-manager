import React from 'react';

const Comment = ({ text }) => {
  return (
    <li>
      <div className="member-container">
        <div className="card-member">TP</div>
      </div>
      <h3>Taylor Peat</h3>
      <div className="comment static-comment">
        <span>{text}</span>
      </div>
      <small>
        22 minutes ago -
        {' '}
        <span className="link">Edit</span>
        {' '}
        -
        {' '}
        <span className="link">Delete</span>
      </small>
      <div className="comment">
        <label>
          <textarea required="" rows="1" defaultValue="The Activity have not been implemented yet." />
          <div>
            <a className="light-button card-icon sm-icon" />
            <a className="light-button smiley-icon sm-icon" />
            <a className="light-button email-icon sm-icon" />
          </div>
          <div>
            <p>You haven&apos;t typed anything!</p>
            <input
              type="submit"
              className="button not-implemented"
              value="Save"
            />
            <i className="x-icon icon" />
          </div>
        </label>
      </div>
    </li>
  );
};

export default Comment;
