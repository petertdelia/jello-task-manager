import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createList } from '../../actions/ListsActions';

const NewList = ({ id }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [newList, setNewList] = useState('');
  const handleChange = ({ target }) => setNewList(target.value);
  const handleClick = () => setActive(!active);
  const position = useSelector((state) => state.lists)
    .filter((list) => list.boardId === id)
    .reduce((acc, { position: _position }) => (_position > acc ? _position : acc), 0);

  const handleSubmit = () => {
    if (newList === '') {
      return;
    }

    dispatch(createList({
      title: newList,
      boardId: id,
      position: position + 1,
    }));
    setNewList('');
    setActive(false);
  };

  return (
    <div id="new-list" className={`new-list ${active ? 'selected' : ''}`}>
      <span onClick={handleClick}>
        Add a list...
      </span>
      <input
        type="text"
        placeholder="Add a list..."
        value={newList}
        onChange={handleChange}
      />
      <div>
        <input type="submit" className="button" value="Save" onClick={handleSubmit} />
        <i className="x-icon icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default NewList;
