const Product = require('../model/Product.model');

const verifId = (req, res, next) => {
    let product = Product.getById(req.params.id);
    if (req.payload.id !== product.userId) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};

module.exports = verifId;




