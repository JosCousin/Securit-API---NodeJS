const User = require('../model/user.model');
const Role = require('../model/role.model');
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
    let member = Role.getByName('member');
    if (!member) {
        return res.status(404).json({ message: 'Role not found' });
    }
    let result = User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        roles: [member.id]
    }

    )
    res.status(201).json(result);
}

const addRole = (req, res, next) => {
    try {
        User.addRole(req.params.userId, req.params.roleId);
        res.status(200).json("bon");
    }
    catch (e) {
        res.status(404).json(e.message );
    }
}

const removeRole = (req, res, next) => {
    try {
        User.removeRole(req.params.userId, req.params.roleId);
        res.status(200).json("enlevé");
    }
    catch (e) {
        res.status(404).json(e.message);
    }
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
    removeRole,
    addRole,
    update
}