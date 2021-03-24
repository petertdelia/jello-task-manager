import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const ExistingLists = ({ id }) => {
  const lists = useSelector((state) => state.lists).filter((list) => list.boardId === id);

  return lists.map((list) => <List list={list} key={list._id} />);
};

export default ExistingLists;
