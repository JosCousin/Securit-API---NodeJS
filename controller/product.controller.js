const Product = require('../model/Product.model');

const getAll = (req,res,next) => {
    let result = Product.getAll(req,res,next);
    res.status(200).json(result);
}

const getByName = (req, res, next) => {
    let result = Product.getByName(req.params.id);
    res.status(200).json(result); 
}

const creat = (req,res,next) => {
    let result = Product.create({
        name: req.body.name,
        description: req.body.description,
        userId: req.payload.id
    }

    )
    res.status(201).json(result);
}

const remove = (req,res,next) => {
    let result = Product.remove(req.params.id);
    res.status(200).json(result);
}

const update = (req,res,next) => {
    let result = Product.update(req.params.id, req.body);
    res.status(200).json(result);
}

module.exports = {
    getAll,
    creat,
    getByName,
    remove,
    update
}