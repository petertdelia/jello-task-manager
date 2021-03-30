import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

export default function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card };
}

export function createCard(card, callback) {
  return function (dispatch) {
    apiClient.createCard(card, (data) => {
      dispatch(createCardSuccess(data));

      if (callback) {
        callback(data.card);
      }
    });
  };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function (dispatch) {
    apiClient.getCard(id, (data) => {
      dispatch(fetchCardSuccess(data));
    });
  };
}

export function updateCard(card) {
  return function (dispatch) {
    apiClient.updateCard(card, (data) => {
      dispatch(fetchCardSuccess(data));
    });
  };
}
