import React from 'react';
import Comment from './Comment';
import Action from './Action';

const Activity = ({ card }) => {
  const commentsAndActions = [...card.comments, ...card.actions].sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return -1;
    } if (b.createdAt < a.createdAt) {
      return 1;
    }
    return 0;
  });

  // console.log(commentsAndActions);

  return (
    <li className="activity-section">
      <h2 className="activity-icon icon">Activity</h2>
      <ul className="horiz-list">
        <li className="not-implemented">Show Details</li>
      </ul>
      <ul className="modal-activity-list">
        {commentsAndActions.map((listItem) => {
          if (Object.keys(listItem).includes('text')) {
            // this is a comment
            return <Comment key={listItem._id} {...listItem} />;
          }
          return <Action key={listItem._id} {...listItem} />;
        })}

      </ul>
    </li>
  );
};

export default Activity;
