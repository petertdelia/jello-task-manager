import React from 'react';
import DropContainer from './DropContainer';
import DraggableCard from './DraggableCards';

const Container = ({ children }) => (
  <div
    id="cards-container"
    data-id="list-3-cards"
  >
    {children}
  </div>
);

const CardsContainer = ({ list, cards }) => {
  const sortedCards = cards.sort((a, b) => {
    if (a.position > b.position) {
      return 1;
    } if (a.position < b.position) {
      return -1;
    }
    return 0;
  });

  if (sortedCards.length === 0) {
    return (
      <Container>
        <DropContainer data={{ listId: list._id }} />
      </Container>
    );
  }

  return (
    sortedCards.map((card) => (
      <Container key={card._id}>
        <DropContainer data={card}>
          <DraggableCard card={card} />
        </DropContainer>
      </Container>
    ))
  );
};

export default CardsContainer;
