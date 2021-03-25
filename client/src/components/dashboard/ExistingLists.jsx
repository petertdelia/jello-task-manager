import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const ExistingLists = ({ id }) => {
  const [activeList, setActiveList] = useState({});
  const lists = useSelector((state) => state.lists).filter((list) => list.boardId === id);

  const handleAddCard = (activeId) => {
    setActiveList({ [activeId]: true });
  };

  // eslint-disable-next-line max-len
  return lists.map((list) => <List list={list} key={list._id} active={activeList[list._id]} onAddCard={handleAddCard} />);
};

export default ExistingLists;
