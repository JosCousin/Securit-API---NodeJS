const Role = require('../model/role.model');

const getAll = (req,res,next) => {
    let result = Role.getAll(req,res,next);
    res.status(200).json(result);
}

const getByName = (req, res, next) => {
    let result = Role.getByName(req.params.id);
    res.status(200).json(result); 
}

const creat = (req,res,next) => {
    let result = Role.create({
        name: req.body.name,
    }

    )
    res.status(201).json(result);
}

const createUserRole = (req,res,next) => {
    let result = Role.create({
        UserId: req.body.UserId,
        RoleId: req.body.RoleId,
    }

    )
    res.status(201).json(result);
}



const remove = (req,res,next) => {
    let result = Role.remove(req.params.id);
    res.status(200).json(result);
}

const update = (req,res,next) => {
    let result = Role.update(req.params.id, req.body);
    res.status(200).json(result);
}

module.exports = {
    getAll,
    creat,
    createUserRole,
    getByName,
    remove,
    update
}