import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOARD_SUCCESS: {
      const { lists } = action.board;
      let cards = [];
      let tempState = state;

      // eslint-disable-next-line no-return-assign
      lists.forEach((list) => cards = cards.concat(list.cards));

      cards.forEach((card) => {
        // eslint-disable-next-line no-unused-vars
        tempState = state.filter((stateList) => stateList._id !== card._id);
      });

      return tempState.concat(cards);
    }
    default:
      return state;
  }
};
