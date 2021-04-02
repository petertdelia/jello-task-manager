import React from 'react';
import { useHistory } from 'react-router-dom';
import { dueDateComparison, truncatedDate } from '../../utils/dateFormat';

const Card = ({ card }) => {
  const history = useHistory();
  const handleModalOpen = () => {
    history.push(`/cards/${card._id}`);
  };

  return (
    <div className="card-background" onClick={handleModalOpen}>
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon" />
        <div className="cover-image" />
        <div className="card-info">
          {card.labels.map((label) => (
            <div
              className={`card-label ${label} colorblindable`}
              key={label}
            />
          ))}
          <p>
            {card.title}
          </p>
        </div>
        <div className="card-icons">
          {card.dueDate
            ? (
              <i className={
                `clock-icon sm-icon ${dueDateComparison(card)} ${card.completed ? 'completed' : ''}`
                }
              >
                {truncatedDate(card)}
              </i>
            )
            : null}
          {card.description ? <i className="description-icon sm-icon" /> : null}
          {card.comments.length > 0 ? <i className="comment-icon sm-icon" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
