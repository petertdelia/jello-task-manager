import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.BOARD_FETCHED: {
      const { lists } = action.board;
      let cards = [];
      // const tempState = state;

      // eslint-disable-next-line no-return-assign
      lists.forEach((list) => cards = cards.concat(list.cards));

      return cards;
    }
    case ActionTypes.CREATE_CARD_SUCCESS:
      return state.concat(action.card);
    default:
      return state;
  }
};
