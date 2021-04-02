import React from 'react';
import {
  truncatedDate, dueDateComparison, isPastDue,
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
        {card.dueDate ? truncatedDate(card) : 'Not yet assigned' }
        <span>{isPastDue(card)}</span>
      </div>
    </li>
  );
};

export default DueDate;
