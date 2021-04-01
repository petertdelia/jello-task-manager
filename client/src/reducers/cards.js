import * as ActionTypes from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.BOARD_FETCHED: {
      const { lists } = action.board;
      let cards = [];
      // const tempState = state;

      // eslint-disable-next-line no-return-assign
      lists.forEach((list) => cards = cards.concat(list.cards));

      return cards.map((card, idx) => ({ ...card, position: idx }));
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
      const { dragTarget, dropTarget } = action.cards;

      return state.map((card) => {
        if (card._id === dragTarget.id) {
          card.position = dropTarget.position;
          card.listId = dropTarget.listId;
        }

        if (card._id === dropTarget._id) {
          card.position = dragTarget.position;
        }

        return card;
      });
    }
    default:
      return state;
  }
};
