import React, { useState, useEffect } from 'react';

const DescriptionForm = ({ card, updateCard, setCardState }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(card.description || '');
  const handleChange = (e) => setDescription(e.target.value);

  useEffect(() => (card ? setDescription(card.description) : null), [card]);

  const handleClick = () => {
    setIsEdit(false);
    updateCard({ ...card, description });
    setCardState({ ...card, description });
  };

  const handleExit = () => {
    setIsEdit(false);
    setDescription(card.description || '');
  };

  return (
    <form className="description">
      <p>Description</p>
      {isEdit ? (
        <>
          <textarea
            className="textarea-toggle"
            defaultValue={description}
            rows="1"
            autoFocus
            onChange={handleChange}
          />
          <div>
            <div className="button" value="Save" onClick={handleClick}>
              Save
            </div>
            <i className="x-icon icon" onClick={handleExit} />
          </div>
        </>
      ) : (
        <>
          <span id="description-edit" className="link" onClick={() => setIsEdit(true)}>
            Edit
          </span>
          <p className="textarea-overlay">
            {card.description || 'No description has been set.'}
          </p>
        </>
      )}

      {/*  */}
      <p id="description-edit-options" className="hidden">
        You have unsaved edits on this field.
        {' '}
        <span className="link">View edits</span>
        {' '}
        -
        {' '}
        <span className="link">Discard</span>
      </p>
    </form>
  );
};

export default DescriptionForm;
