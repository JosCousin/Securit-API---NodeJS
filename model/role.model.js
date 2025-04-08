let listRole = require('./../data/role.json');
const fs = require('fs');
const ROLE_FILE = './data/role.json';
let currentId = listRole.length > 0 ? Math.max(...listRole.map(u => u.id)) : 0;


const save = () => {
    fs.writeFileSync(ROLE_FILE, JSON.stringify(listRole));
}

const getAll = (req, res, next) => {
    return listRole;
}

const getById = (id) => { 
    return listRole.find(role => role.id === parseInt(id));
}
const getByName = (name) => { 
    return listRole.find(role => role.name === name);
}


const create = (UserId, RoleID) => { 
    let newrole = {id: ++currentId};
    if (role.name) {
        newrole.name = role.name;
    }
    listRole.push(newrole);
    save();
    return newrole;
}



const update = (id, role) => { 
    let roleToUpdate = listRole.find(role => role.id === parseInt(id));
    if (!roleToUpdate) {
        return false;
    }
    if (role.name) {
        roleToUpdate.name = role.name;

    }
    save();
}
const remove = (id) => { 
    listRole = listRole.filter(role => role.id !== parseInt(id));
    save();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByName
}