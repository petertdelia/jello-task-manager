import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createList } from '../../actions/ListsActions';

const NewList = ({ id }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [newList, setNewList] = useState('');
  const handleChange = ({ target }) => setNewList(target.value);
  const handleClick = () => setActive(!active);

  const handleSubmit = () => {
    if (newList === '') {
      return;
    }

    dispatch(createList({ title: newList, boardId: id }));
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
