const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.ctrl');

router.route('/').get(userController.getUsers)
router.route('/:id').get(userController.getUser);
router.route('/').post(userController.addUser);
router.route('/:id').put(userController.editUser);
router.route('/:id').delete(userController.deleteUser);

module.exports = router;