import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const ExistingLists = () => {
  const lists = useSelector((state) => state.lists);
  console.log(lists);

  return lists.map((list) => <List list={list} key={list._id} />);
};

export default ExistingLists;
