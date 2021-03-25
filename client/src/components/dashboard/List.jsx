import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateList } from '../../actions/ListsActions';

import Card from './Card';

const List = ({ list, active, onAddCard }) => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards).filter((card) => card.listId === list._id);
  const [title, setTitle] = useState(list.title);
  const [newCard, setNewCard] = useState('');

  const handleChange = ({ target }) => setTitle(target.value);

  const handleBlur = () => {
    dispatch(updateList(list._id, title));
  };

  const handleEnterKey = (e) => {
    if (!e.key === 'Enter') return;

    handleBlur();
  };

  const handleCreateCard = () => {
    // dispatch()
  };

  return (
    <div className={`list-wrapper ${active ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href="" />
          <div>
            <input
              type="text"
              className="list-title"
              value={title}
              onChange={handleChange}
              onKeyDown={handleEnterKey}
              onBlur={handleBlur}
            />
          </div>
          <div className="add-dropdown add-top">
            <div className="card" />
            <a onClick={handleCreateCard} className="button">Add</a>
            <i className="x-icon icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-3-cards">
            {cards.map((card) => <Card card={card} key={card._id} />)}
          </div>
          <div className={`add-dropdown add-bottom ${active ? 'active-card' : ''}`}>
            <div className="card">
              <div className="card-info" />
              <textarea name="add-card" />
              <div className="members" />
            </div>
            <a className="button">Add</a>
            <i className="x-icon icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div onClick={() => onAddCard(list._id)} className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
