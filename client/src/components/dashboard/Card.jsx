import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ card }) => {
  const history = useHistory();
  const handleModalOpen = () => {
    console.log('wefwe');
    history.push(`/card/${card._id}`);
  };

  return (
    <div className="card-background" onClick={handleModalOpen}>
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon" />
        <div className="cover-image" />
        <div className="card-info">
          <p>
            {card.title}
          </p>
        </div>
        <div className="card-icons" />
      </div>
    </div>
  );
};

export default Card;
