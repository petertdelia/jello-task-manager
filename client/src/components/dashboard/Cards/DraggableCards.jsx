import React from 'react';
import DropContainer from './DropContainer';
import Card from './Card';

const DraggableCards = ({ list, cards }) => {
  const sortedCards = cards.sort((a, b) => {
    if (a.position > b.position) {
      return 1;
    } if (a.position < b.position) {
      return -1;
    }
    return 0;
  });

  if (sortedCards.length === 0) {
    return <DropContainer data={{ listId: list._id }} />;
  }

  return (
    sortedCards.map((card) => (
      <DropContainer data={card} key={card._id}>
        <Card card={card} key={card._id} />
      </DropContainer>
    ))
  );
};

export default DraggableCards;
