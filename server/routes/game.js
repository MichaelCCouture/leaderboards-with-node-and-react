const express = require('express');
const router = express.Router();
const gameController = require('./../controllers/game.ctrl');

router.route('/').get(gameController.getGames)
router.route('/:id').get(gameController.getGame);
router.route('/').post(gameController.addGame);
router.route('/:id').put(gameController.editGame);
router.route('/:id').delete(gameController.deleteGame);

module.exports = router;