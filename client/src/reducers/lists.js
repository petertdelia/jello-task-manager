import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.BOARD_FETCHED: {
      const { lists } = action.board;
      let tempState = state;

      lists.forEach((list) => {
        tempState = tempState.filter((stateList) => stateList._id !== list._id);
      });

      const finalState = tempState.concat(lists).map((list) => ({ ...list }));
      // eslint-disable-next-line no-param-reassign
      finalState.forEach((fs) => delete fs.cards);

      return finalState;
    }

    case ActionTypes.DELETE_LIST_SUCCESS: {
      return state.filter((list) => list._id !== action._id);
    }

    case ActionTypes.CREATE_LIST_SUCCESS:
      return state.concat(action.list);
    default:
      return state;
  }
};
