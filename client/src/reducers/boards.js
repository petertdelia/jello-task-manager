import * as ActionTypes from '../constants/ActionTypes';

export default function boards(state = [], action) {
  switch (action.type) {
    case ActionTypes.FETCH_BOARDS_SUCCESS: {
      return action.boards;
    }
    case ActionTypes.CREATE_BOARD_SUCCESS: {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case ActionTypes.FETCH_BOARD_SUCCESS: {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    default:
      return state;
  }
}
