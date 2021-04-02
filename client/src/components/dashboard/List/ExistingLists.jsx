import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import List from './List';
import DraggableList from './DraggableLists';
import DropContainer from './DropContainer';

const ExistingLists = ({ id }) => {
  const [activeList, setActiveList] = useState({});
  const lists = useSelector((state) => state.lists).filter((list) => list.boardId === id);

  const handleAddCard = (activeId) => {
    setActiveList({ [activeId]: true });
  };

  const sortedLists = lists.sort((a, b) => {
    if (a.position > b.position) {
      return 1;
    } if (a.position < b.position) {
      return -1;
    }
    return 0;
  });

  return (
    <DndProvider backend={HTML5Backend}>
      {sortedLists.map((list) => (
        <DropContainer data={list} active={activeList[list._id]} key={list._id}>
          <DraggableList
            list={list}
            key={list._id}
            active={activeList[list._id]}
            onAddCard={handleAddCard}
          />
        </DropContainer>
      ))}
    </DndProvider>
  );
};

export default ExistingLists;
