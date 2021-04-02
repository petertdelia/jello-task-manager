import React from 'react';
import { useDrag } from 'react-dnd';
import Card from './Card';

const DraggableCard = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { _id: card._id, position: card.position, listId: card.listId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity }}
    >
      <Card card={card} />
    </div>
  );
};

export default DraggableCard;
