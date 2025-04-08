const product = require('../model/product.model');
const bcrypt = require('bcrypt');



const getAll = (req,res,next) => {
    let result = product.getAll(req,res,next);
    res.status(200).json(result);
}

const getByName = (req, res, next) => {
    let result = product.getByName(req.params.id);
    res.status(200).json(result); 
}

const creat = (req,res,next) => {
    let result = product.create({
        name: req.body.name,
        description: req.body.description
    }

    )
    res.status(201).json(result);
}

const remove = (req,res,next) => {
    let result = product.remove(req.params.id);
    res.status(200).json(result);
}

const update = (req,res,next) => {
    let result = product.update(req.params.id, req.body);
    res.status(200).json(result);
}

module.exports = {
    getAll,
    creat,
    getByName,
    remove,
    update
}