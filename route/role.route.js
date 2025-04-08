const express = require('express');
const router = express.Router();
const RoleController = require('../controller/role.controller.js');
const auth = require('../middleware/auth.middleware.js');

router.get('/', RoleController.getAll);
router.get('/:id', RoleController.getByName);

router.post('/', auth, RoleController.creat);
router.delete('/:id',auth,  RoleController.remove);
router.put('/:id', auth, RoleController.update);


module.exports = router;