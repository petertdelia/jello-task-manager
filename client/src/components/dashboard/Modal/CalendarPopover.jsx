/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import Pikaday from 'pikaday';
import React, { useEffect, useState } from 'react';

const CalendarPopover = ({ card, updateCard, onPopoverClose }) => {
  const [popover, setPopover] = useState(null);
  const handleClose = (e) => {
    e.preventDefault();
    onPopoverClose();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateCard({ ...card, dueDate: popover.getDate() });
  };

  useEffect(() => {
    let date;

    if (!card.dueDate) {
      date = new Date();
      date.setDate(date.getDate() + 1);
    } else {
      date = new Date(card.dueDate);
    }

    if (!popover) {
      const newPopover = new Pikaday({
        field: document.querySelector('.datepicker-select-date input'),
        container: document.querySelector('#calendar-widget'),
        bound: false,
        firstDay: 1,
        yearRange: 5,
        defaultDate: date,
        setDefaultDate: true,
        format: 'M/D/YYYY',
        i18n: {
          previousMonth: 'Prev',
          nextMonth: 'Next',
          months: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          weekdays: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        },
      });

      newPopover.show();
      setPopover(newPopover);
    }
  }, [popover]);

  return (
    <>
      <header>
        <span>Change due date</span>
        <a href="#" className="icon-sm icon-close" onClick={handleClose} />
      </header>
      <div className="content">
        <form>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Date
                <input type="text" placeholder="Enter date" autoFocus />
              </label>
            </div>
            {/* Pikaday does NOT support time selection */}
            <div className="datepicker-select-time">
              <label>
                Time
                <input type="text" placeholder="Enter time" defaultValue="12:00 PM" />
              </label>
            </div>
            <div id="calendar-widget" />
          </div>
          <button className="button" type="submit" onClick={handleUpdate}>
            Save
          </button>
          <button className="button red-button" type="reset">
            Remove
          </button>
        </form>
      </div>
    </>
  );
};

export default CalendarPopover;
