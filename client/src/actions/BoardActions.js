import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';
import * as ListActions from './ListsActions';
import * as CardActions from './CardsActions';

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardRequest() {
  return { type: types.FETCH_BOARD_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, board };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board };
}

export function fetchBoards() {
  return function (dispatch) {
    // TODO: Copy fetchboard
    dispatch(fetchBoardsRequest());
    apiClient.getBoards((data) => dispatch(fetchBoardsSuccess(data.boards)));
  };
}

export function fetchBoard(id) {
  return function (dispatch) {
    dispatch(fetchBoardRequest());

    apiClient.getBoard(id, (data) => {
      const { board } = data;

      dispatch(fetchBoardSuccess(board));

      // TODO:
      // board.lists = board.lists.map((list) => {
      //   dispatch(CardActions.fetchCardsSuccess(list.cards));

      //   // eslint-disable-next-line no-param-reassign
      //   delete list.cards;
      //   return list;
      // });

      // dispatch(ListActions.fetchListsSuccess(board.lists));

      // delete board.lists;
      // dispatch(fetchBoardSuccess(board));
    });
  };
}

export function createBoard(board, callback) {
  return function (dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, (data) => {
      dispatch(createBoardSuccess(data.board));

      if (callback) {
        callback(data.board);
      }
    });
  };
}
