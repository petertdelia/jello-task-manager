import React from 'react';

const Card = ({ card }) => (
  <div className="card-background">
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

export default Card;
