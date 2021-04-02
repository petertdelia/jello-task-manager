import React from 'react';

const Labels = ({ card, handleAddPopover }) => (
  <li className="labels-section">
    <h3>Labels</h3>

    {card.labels.map((label) => (
      <div className="member-container" key={label}>
        <div className={`${label} label colorblindable`} />
      </div>
    ))}

    <div className="member-container">
      <i
        className="plus-icon sm-icon"
        data-popovertype="labels"
        onClick={handleAddPopover}
      />
    </div>
  </li>
);

export default Labels;
