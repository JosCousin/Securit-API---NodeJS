let listUser = require('./../data/user.json');
let Role = require('./role.model.js');
const fs = require('fs');
const USER_FILE = './data/user.json';
let currentId = listUser.length > 0 ? Math.max(...listUser.map(u => u.id)) : 0;


const save = () => {
    fs.writeFileSync(USER_FILE, JSON.stringify(listUser));
}

const getAll = (req, res, next) => {
    return listUser;
}

const getById = (id) => {
    return listUser.find(user => user.id === parseInt(id));
}
const getByEmail = (email) => {
    return listUser.find(user => user.email === email);
}



const create = (user) => {
    let newUser = { id: ++currentId, roles: [] };
    if (user.email) {
        newUser.email = user.email;
    }
    if (user.password) {
        newUser.password = user.password;
    }
    if (user.roles) {
        newUser.roles = user.roles;
    }

    listUser.push(newUser);
    save();
    return newUser;
}

const addRole = (userId, roleId) => {
    let user = listUser.find(user => user.id === parseInt(userId));
    if (!user) {
        throw new Error('User not found');
    }
    let role = Role.getById(roleId);
    if (!role) {
        throw new Error('Role not found');
    }
    user.roles.push(parseInt(roleId));
    save();

}

const removeRole = (userId, roleId) => {
    let user = listUser.find(user => user.id === parseInt(userId));
    if (!user) {
        throw new Error('User not found');
    }
    if (!user.roles.includes(roleId)) {
        throw new Error('Role not found in user roles');
    }
    user.roles = user.roles.filter(id => id !== parseInt(roleId));
    save();
}

const update = (id, user) => {
    let userToUpdate = listUser.find(user => user.id === parseInt(id));
    if (!userToUpdate) {
        return false;
    }
    if (user.email) {
        userToUpdate.email = user.email;

    }
    if (user.name) {
        userToUpdate.name = user.name;
    }
    save();
}
const remove = (id) => {
    listUser = listUser.filter(user => user.id !== parseInt(id));
    save();
}

module.exports = {
    getAll,
    getById,
    create,
    addRole,
    removeRole,
    update,
    remove,
    getByEmail
}