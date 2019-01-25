const express = require('express');
const router = express.Router();
const runController = require('./../controllers/run.ctrl');

router.route('/:id').get(runController.getRun);
router.route('/').post(runController.addRun);
router.route('/:id').put(runController.editRun);
router.route('/:id').delete(runController.deleteRun);

module.exports = router;