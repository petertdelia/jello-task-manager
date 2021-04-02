import React from 'react';
import { useDrag } from 'react-dnd';
import List from './List';

const DraggableCard = ({ list, active, onAddCard }) => {
  // id: card._id, position: card.position, listId: card.listId
  const [{ isDragging }, drag] = useDrag({
    type: 'LIST',
    item: { _id: list._id, position: list.position },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity }}
      // className={`list-wrapper ${active ? 'add-dropdown-active' : ''}`}
    >
      <List
        list={list}
        key={list._id}
        active={active}
        onAddCard={onAddCard}
      />
    </div>
  );
};

export default DraggableCard;
