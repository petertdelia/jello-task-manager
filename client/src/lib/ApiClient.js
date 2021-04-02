import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const { response } = errorResponse;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error('Error: ', errorResponse);
  }
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common.Accept = 'application/json';

const apiClient = {
  getBoard(id, callback) {
    return axios
      .get(`${routes.BOARDS_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoards(callback) {
    return axios
      .get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard(board, callback) {
    return axios
      .post(routes.CREATE_BOARD_URL, board)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getLists(callback) {
    return axios
      .get(routes.LISTS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createList(list, callback) {
    return axios
      .post(routes.CREATE_LIST_URL, list)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateList(_id, title, callback) {
    return axios
      .put(`${routes.UPDATE_LIST_URL}/${_id}`, { _id, title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createCard(card, callback) {
    return axios
      .post(routes.CREATE_CARD_URL, card)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard(id, callback) {
    return axios
      .get(`${routes.CARD_INDEX_URL}/${id}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateCard(card, callback) {
    return axios
      .put(`${routes.UPDATE_CARD_URL}/${card._id}`, { card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createComment(comment, callback) {
    return axios
      .post(routes.CREATE_COMMENT_URL, comment)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  deleteList(list, callback) {
    return axios
      .delete(`${routes.DELETE_LIST_URL}/${list}`)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
};

export default apiClient;
