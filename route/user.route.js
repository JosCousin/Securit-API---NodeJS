const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller.js');
const auth = require('../middleware/auth.middleware.js');

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

router.post('/', UserController.creat);
router.delete('/:id', UserController.remove);
router.put('/:id', UserController.update);

router.put('/role/:userId/:roleId', auth("admin"), UserController.addRole);
router.delete('/role/:userId/:roleId', auth("admin"), UserController.removeRole);


module.exports = router;