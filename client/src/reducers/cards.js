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
    default:
      return state;
  }
};
