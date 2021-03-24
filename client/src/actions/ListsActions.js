import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

// export function fetchListsRequest() {
//   return { type: types.FETCH_LISTS_REQUEST };
// }

export function fetchListsSuccess(lists) {
  return { type: types.FETCH_LISTS_SUCCESS, lists };
}

// export function createBoardRequest() {
//   return { type: types.CREATE_LIST_REQUEST };
// }

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

// export function fetchLists() {
//   return function (dispatch) {
//     dispatch(fetchListsRequest());
//     apiClient.getLists((data) => dispatch(fetchListsSuccess(data.lists)));
//   };
// }

export const createList = (list, callback) => (dispatch) => {
  // TODO: Something is borked
  // dispatch(createListRequest());
  apiClient.createList(list, (data) => {
    dispatch(createListSuccess(data.list));

    if (callback) {
      callback(data.list);
    }
  });
};
