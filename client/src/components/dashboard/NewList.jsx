import React, { useState } from 'react';

const NewList = () => {
  const [active, setActive] = useState(false);
  const [newList, setNewList] = useState('');
  const handleChange = ({ target }) => setNewList(target.value);
  const handleClick = () => setActive(!active);

  const handleSubmit = () => {
    if (newList === '') {
      return;
    }

    // TODO: Api request
    setNewList('');
    setActive(false);
  };

  return (
    <div id="new-list" className="new-list">
      <span
        style={{ display: active ? 'none' : '' }}
        onClick={handleClick}
      >
        Add a list...

      </span>
      <input
        type="text"
        placeholder="Add a list..."
        value={newList}
        onChange={handleChange}
        style={{ display: active ? 'block' : 'none' }}
      />
      <div style={{ maxHeight: active ? '100px' : 0 }}>
        <input type="submit" className="button" value="Save" onClick={handleSubmit} />
        <i className="x-icon icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default NewList;
