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
};

export default apiClient;
