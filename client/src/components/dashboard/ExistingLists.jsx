import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import List from './List';

const ExistingLists = ({ id }) => {
  const [activeList, setActiveList] = useState({});
  const lists = useSelector((state) => state.lists).filter((list) => list.boardId === id);

  const handleAddCard = (activeId) => {
    setActiveList({ [activeId]: true });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {lists.map((list) => (
        <List
          list={list}
          key={list._id}
          active={activeList[list._id]}
          onAddCard={handleAddCard}
        />
      ))}
    </DndProvider>
  );
};

export default ExistingLists;
