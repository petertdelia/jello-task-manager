import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CARDS_SUCCESS: {
      return action.cards;
    }
    case ActionTypes.CREATE_CARD_SUCCESS: {
      const newCards = action.card;
      return state.concat(newCards);
    }
    case ActionTypes.FETCH_CARD_SUCCESS: {
      const newCards = action.card;
      return state.concat(newCards);
    }
    case ActionTypes.FETCH_BOARD_SUCCESS: {
      // TODO:
      // Destructure obj to extract cards and remove cards to reduce dup memory
      // filter current state cards to prevent adding duplicate cards
    }
    default:
      return state;
  }
};
