/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import moment from 'moment';
import Pikaday from 'pikaday';
import React, { useEffect, useState } from 'react';

const CalendarPopover = ({ card, onClose }) => {
  // use `card` imported above to pass the data around for card

  const [popover, setPopover] = useState(null);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);

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
                <input type="text" placeholder="Enter date" />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Time
                <input type="text" placeholder="Enter time" value="12:00 PM" />
              </label>
            </div>
            <div id="calendar-widget" />
          </div>
          <button className="button" type="submit">
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

//  defaultDate: moment().add(1, "day").toDate(),
// toString(date, format) {
//   return moment(date).format(format);
// },

export default CalendarPopover;
