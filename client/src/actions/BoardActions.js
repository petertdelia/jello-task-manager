import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardSuccess(board) {
  return { type: types.BOARD_FETCHED, board };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board };
}

export function fetchBoards() {
  return function (dispatch) {
    apiClient.getBoards((data) => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function fetchBoard(id) {
  return function (dispatch) {
    apiClient.getBoard(id, ({ board }) => dispatch(fetchBoardSuccess(board)));
  };
}

export function createBoard(board, callback) {
  return function (dispatch) {
    apiClient.createBoard(board, (data) => {
      dispatch(createBoardSuccess(data.board));
      console.log(data);
      if (callback) {
        callback(data.board);
      }
    });
  };
}
