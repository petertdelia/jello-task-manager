import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.BOARD_FETCHED: {
      const { lists } = action.board;
      let cards = [];

      // eslint-disable-next-line no-return-assign
      lists.forEach((list) => cards = cards.concat(list.cards));

      return cards;
    }
    case ActionTypes.CREATE_CARD_SUCCESS:
      return state.concat(action.card);
    case ActionTypes.FETCH_CARD_SUCCESS: {
      const otherCards = state.filter((card) => card._id !== action.card._id);
      return otherCards.concat(action.card);
    }
    case ActionTypes.CREATE_COMMENT_SUCCESS: {
      return state.map((card) => {
        if (card._id === action.comment.cardId) {
          card.comments = card.comments.concat(action.comment);
        }
        return card;
      });
    }
    case 'UPDATE_CARD_POSTION': {
      const { cards } = action;
      let tempState = state;

      cards.forEach((card) => {
        tempState = tempState.filter((stateList) => stateList._id !== card._id);
      });

      return tempState.concat(cards);
    }
    default:
      return state;
  }
};
