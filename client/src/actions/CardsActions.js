import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export function fetchCardsSuccess(cards) {
  return { type: types.FETCH_CARDS_SUCCESS, cards };
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

// export function createCards(card, callback) {
//   return function (dispatch) {
//     apiClient.createList(list, (data) => {
//       dispatch(createListSuccess(data.list));

//       if (callback) {
//         callback(data.list);
//       }
//     });
//   };
// }
