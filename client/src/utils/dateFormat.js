import moment from 'moment';

const DAY = 86400000;

export const truncatedDate = ({ dueDate }) => (
  moment(new Date(dueDate)).format('MMM DD')
);

export const dueDateComparison = ({ dueDate }) => {
  const dateDiff = Date.now() - new Date(dueDate);

  if (dateDiff > 0) {
    return dateDiff > DAY ? 'overdue' : 'overdue-recent';
  }

  return dateDiff < DAY ? 'due-soon' : '';
};

export const isPastDue = ({ dueDate }) => {
  const dateDiff = Date.now() - new Date(dueDate);

  return (dateDiff > 0) ? ' (past due)' : '';
};
