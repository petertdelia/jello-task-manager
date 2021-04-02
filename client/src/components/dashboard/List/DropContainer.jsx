import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateListDropPosition } from '../../../actions/ListsActions';

const DropContainer = ({ data, active, children }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: 'LIST',
    drop: (item) => {
      dispatch(updateListDropPosition(item, { ...data }));
    },
  }), [data]);

  return (
    <div
      ref={drop}
      style={{ minHeight: '15px' }}
      className={`list-wrapper ${active ? 'add-dropdown-active' : ''}`}
    >
      {children}
    </div>
  );
};

export default DropContainer;
