import * as ActionTypes from '../constants/ActionTypes';

export default function boards(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_BOARDS_SUCCESS: {
      return action.boards;
    }
    case ActionTypes.CREATE_BOARD_SUCCESS: {
      return state.concat(action.board);
    }
    case ActionTypes.BOARD_FETCHED: {
      const boardWithoutLists = { ...action.board };
      delete boardWithoutLists.lists;

      return state
        .filter((board) => board._id !== action.board._id)
        .concat(boardWithoutLists);
    }
    default:
      return state;
  }
}
