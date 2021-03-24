import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const List = ({ list }) => {
  const cards = useSelector((state) => state.cards).filter((card) => card.listId === list._id);

  const [title, setTitle] = useState(list.title);
  const handleChange = ({ target }) => setTitle(target.value);

  const handleBlur = () => {
    // TODO: API REQUEST
  };

  return (
    <div className="list-wrapper add-dropdown-active">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href="" />
          <div>
            <input
              type="text"
              className="list-title"
              value={title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="add-dropdown add-top">
            <div className="card" />
            <a className="button">Add</a>
            <i className="x-icon icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-3-cards">
            {cards.map((card) => <Card card={card} key={card._id} />)}
          </div>
          <div className="add-dropdown add-bottom active-card">
            {/* <div className="card">
                      <div className="card-info" />
                      <textarea name="add-card" />
                      <div className="members" />
                    </div> */}
            <a className="button">Add</a>
            <i className="x-icon icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
