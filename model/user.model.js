const { parse } = require('path');
let listUser = require('./../data/user.json');
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
    let newUser = {id: ++currentId};
    if (user.email) {
        newUser.email = user.email;
    }
    if (user.password) {
        newUser.password = user.password;
    }

    listUser.push(newUser);
    save();
    return newUser;
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
    update,
    remove,
    getByEmail
}