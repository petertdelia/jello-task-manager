import React from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { updateCardDropPosition } from '../../../actions/CardsActions';

const DropContainer = ({ data, children }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => {
      dispatch(updateCardDropPosition(item, { ...data }));
    },
  }), [data]);

  return (
    <div
      ref={drop}
      style={{ minHeight: '15px' }}
    >
      {children}
    </div>
  );
};

export default DropContainer;
