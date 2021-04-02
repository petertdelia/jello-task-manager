import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export const createListSuccess = (list) => ({
  type: types.CREATE_LIST_SUCCESS,
  list,
});
export const deleteListSuccess = (_id) => ({
  type: types.DELETE_LIST_SUCCESS,
  _id,
});

export const createList = (list, callback) => (dispatch) => {
  apiClient.createList(list, (data) => {
    dispatch(createListSuccess(data.list));

    if (callback) {
      callback(data.list);
    }
  });
};

export const updateList = (id, title) => () => {
  apiClient.updateList(id, { _id: id, title });
};

export const deleteList = (id, callback) => (dispatch) => {
  apiClient.deleteList(id, () => {
    dispatch(deleteListSuccess(id));
    if (callback) { callback(); }
  });
};

export const updateDropPositionSuccess = (lists) => ({ type: 'UPDATE_LIST_POSITION', lists });

// TODO: This probably can be merged with updateList
export function updateListDropPosition(dragTarget, dropTarget) {
  if (dropTarget._id === dragTarget._id) return () => {};

  const dragOpts = {
    _id: dragTarget._id,
    position: dropTarget.position,
  };
  const dropOpts = {
    _id: dropTarget._id,
    position: dragTarget.position,
  };

  return (dispatch) => {
    apiClient.updateList(dragTarget._id, dragOpts, (newDragList) => {
      // console.log(newDragList);
      apiClient.updateList(dropTarget._id, dropOpts, (newDropList) => {
        dispatch(updateDropPositionSuccess([newDragList, newDropList]));
      });
    });
  };
}
