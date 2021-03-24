const express = require("express");

const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const { validateBoard } = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.post("/boards", validateBoard, boardsController.createBoard);

// router.get("/lists", listsController.getLists);
// router.post("/lists", listsController.createList);
// router.get("/lists/:id", boardsController.getBoard);

router.get("/boards/:id", boardsController.getBoard);

module.exports = router;
