const express = require('express');
const router = express.Router();
const ProductController = require('../controller/product.controller.js');

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getByName);

router.post('/', ProductController.creat);
router.delete('/:id', ProductController.remove);
router.put('/:id', ProductController.update);


module.exports = router;