import React from 'react';
import Popover from '../../shared/Popover';
import CalendarPopover from './CalendarPopover';
// import Labels from "./Labels"; // this should be another component

const PopoverContainer = ({
  card, popoverType, attachedTo, onClose,
}) => {
  let child;
  //

  switch (popoverType) {
    case 'dueDate':
      child = <CalendarPopover card={card} onClose={onClose} />;
      break;
    case 'labels':
      break;
    case 'move':
      break;
    default:
      break;
  }

  return (
    <Popover type={popoverType} visible={!!popoverType} attachedTo={attachedTo}>
      {child}
    </Popover>
  );
};

export default PopoverContainer;
