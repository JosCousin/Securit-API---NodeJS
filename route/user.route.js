const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller.js');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

router.post('/', UserController.creat);
router.delete('/:id', UserController.remove);
router.put('/:id', UserController.update);

module.exports = router;