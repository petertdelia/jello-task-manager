import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export const createListSuccess = (list) => ({
  type: types.CREATE_LIST_SUCCESS,
  list,
});

export const createList = (list, callback) => (dispatch) => {
  apiClient.createList(list, (data) => {
    dispatch(createListSuccess(data.list));

    if (callback) {
      callback(data.list);
    }
  });
};

export const updateList = (id, title) => (dispatch) => {
  apiClient.updateList(id, title);
};
