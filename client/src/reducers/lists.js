import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOARD_SUCCESS: {
      const { lists } = action.board;
      let tempState = state;

      lists.forEach((list) => {
        // eslint-disable-next-line no-unused-vars
        tempState = state.filter((stateList) => stateList._id !== list._id);
      });

      const finalState = tempState.concat(lists).map((list) => ({ ...list }));
      finalState.forEach((fs) => delete fs.cards);

      return finalState;
    }
    default:
      return state;
  }
};
