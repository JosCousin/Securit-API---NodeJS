const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product.controller.js');
const auth = require('../middleware/auth.middleware.js');
const verifId = require('../middleware/product.middleware.js');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getByName);

router.post('/', auth, ProductController.creat);
router.delete('/:id', auth, verifId, ProductController.remove);
router.put('/:id', auth, verifId, ProductController.update);


module.exports = router;