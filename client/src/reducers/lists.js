import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LISTS_SUCCESS: {
      return action.lists;
    }
    // case ActionTypes.CREATE_CARD_SUCCESS: {
    //   const newCards = action.card;
    //   return state.concat(newCards);
    // }
    case ActionTypes.FETCH_LIST_SUCCESS: {
      const newList = action.list;
      return state.concat(newList);
    }
    default:
      return state;
  }
};
