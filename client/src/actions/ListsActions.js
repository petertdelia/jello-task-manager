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
  apiClient.updateList(id, title);
};

export const deleteList = (id, callback) => (dispatch) => {
  apiClient.deleteList(id, () => {
    dispatch(deleteListSuccess(id));
    if (callback) { callback(); }
  });
};

export const updateDropPositionSuccess = (lists) => ({ type: 'UPDATE_LIST_POSITION', lists });

export function updateListDropPosition(dragTarget, dropTarget) {
  return (dispatch) => {
    dispatch(updateDropPositionSuccess({ dragTarget, dropTarget }));
  };
}
