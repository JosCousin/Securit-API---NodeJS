const User = require('../model/user.model');
const bcrypt = require('bcrypt');



const getAll = (req,res,next) => {
    let result = User.getAll(req,res,next);
    res.status(200).json(result);
}

const getById = (req, res, next) => {
    let result = User.getById(req.params.id);
    res.status(200).json(result); 
}

const creat = (req,res,next) => {
    let result = User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    )
    res.status(201).json(result);
}

const remove = (req,res,next) => {
    let result = User.remove(req.params.id);
    res.status(200).json(result);
}

const update = (req,res,next) => {
    let result = User.update(req.params.id, req.body);
    res.status(200).json(result);
}

module.exports = {
    getAll,
    creat,
    getById,
    remove,
    update
}