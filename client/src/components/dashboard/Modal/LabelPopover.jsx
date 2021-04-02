import React from 'react';

const LabelPopover = ({ card, onClose, updateCard }) => {
  const labelList = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];

  const handleClick = (label) => {
    // let labels = [...card.labels];

    const labels = card.labels.includes(label)
      ? card.labels.filter((curLabels) => curLabels !== label)
      : card.labels.concat(label);

    updateCard({ ...card, labels });
  };

  const Label = ({ label, id }) => (
    <li onClick={() => handleClick(label)}>
      <div className={`${label} colorblindable`} data-id={id}>
        { card.labels.includes(label) ? <i className="check-icon sm-icon" /> : null }
      </div>
      <div className={`label-background ${label}`} />
      <div className="label-background-overlay" />
      <i className="edit-icon icon not-implemented" />
    </li>
  );

  return (
    <div id="add-options-labels-dropdown">
      <header>
        <span>Labels</span>
        <a href="#" className="icon-sm icon-close" onClick={onClose} />
      </header>
      <div className="content">
        <input
          className="dropdown-input"
          placeholder="Search labels..."
          type="text"
        />
        <div className="labels-search-results">
          <ul className="label-list">
            {labelList.map((label, idx) => (
              <Label
                label={label}
                id={idx}
                key={label}
              />
            ))}
          </ul>

          <ul className="light-list">
            <li className="not-implemented">Create a new label</li>
            <hr />
            <li className="toggleColorblind">
              Enable color blind friendly mode.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LabelPopover;
