import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateList, deleteList } from '../../actions/ListsActions';
import { createCard } from '../../actions/CardsActions';

import CardsContainer from './Cards/CardsContainer';

const List = ({ list, active, onAddCard }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(list.title);
  const [newCardTitle, setNewCardTitle] = useState('');
  const handleChange = ({ target }) => setTitle(target.value);

  const cards = useSelector((state) => state.cards)
    .filter((card) => card.listId === list._id && !card.archived);

  const handleBlur = () => {
    dispatch(updateList(list._id, title));
  };

  const handleEnterKey = (e) => {
    if (!e.key === 'Enter') return;

    handleBlur();
  };

  const handleCardTitleChange = ({ target }) => {
    setNewCardTitle(target.value);
  };

  const handleClose = () => {
    onAddCard(false);
    setNewCardTitle('');
  };

  const handleCreateCard = () => {
    dispatch(createCard({ title: newCardTitle, listId: list._id }));
    handleClose();
  };

  const handleDeleteList = () => {
    if (confirm('Are you sure you want to delete this list?')) {
      dispatch(deleteList(list._id), () => {
      });
    }
  };

  return (
    <div className={`list-wrapper ${active ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
        <div className="list">
          <a className="x-icon icon" onClick={handleDeleteList} />
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
            <a className="button">Add</a>
            <i className="more-icon sm-icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div id="cards-container" data-id="list-3-cards">
            <CardsContainer list={list} cards={cards} />
          </div>
          <div className={`add-dropdown add-bottom ${active ? 'active-card' : ''}`}>
            <div className="card">
              <div className="card-info" />
              <textarea onChange={handleCardTitleChange} name="add-card" value={newCardTitle} />
              <div className="members" />
            </div>
            <a onClick={handleCreateCard} className="button">Add</a>
            <i onClick={handleClose} className="x-icon icon" />
            <div className="add-options">
              <span>...</span>
            </div>
          </div>
          <div
            onClick={() => onAddCard(list._id)}
            className="add-card-toggle"
            data-position="bottom"
          >
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
