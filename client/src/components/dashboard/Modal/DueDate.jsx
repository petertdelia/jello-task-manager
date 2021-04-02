import React from 'react';
import {
  fullDate, dueDateComparison, isPastDue,
} from '../../../utils/dateFormat';

const DueDate = ({ card, update }) => {
  const handleCompletedToggle = () => update({ ...card, completed: !card.completed });

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={dueDateComparison(card)}>
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          defaultChecked={!!card.completed}
          onClick={handleCompletedToggle}
        />
        {fullDate(card)}
        <span>{isPastDue(card)}</span>
      </div>
    </li>
  );
};

export default DueDate;
