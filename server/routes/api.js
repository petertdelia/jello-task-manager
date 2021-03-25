const express = require('express');

const router = express.Router();
const boardsController = require('../controllers/boardsController');
const cardsController = require('../controllers/cardsController');
const listsController = require('../controllers/listsController');
const { validateBoard, validateList, validateCard } = require('../validators/validators');

router.get('/boards', boardsController.getBoards);
router.post('/boards', validateBoard, boardsController.createBoard);
router.get('/boards/:id', boardsController.getBoard);

router.get('/lists', listsController.getLists);
router.post('/lists', validateList, listsController.createList, boardsController.addListToBoard);
router.put('/lists/:id', listsController.updateList);

router.get('/cards/:id', cardsController.getCard);
router.post('/cards', validateCard, cardsController.createCard, listsController.addCardToList);

module.exports = router;
