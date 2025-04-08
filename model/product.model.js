let listProduct = require('./../data/product.json');
const fs = require('fs');
const PRODUCT_FILE = './data/product.json';
let currentId = listProduct.length > 0 ? Math.max(...listProduct.map(u => u.id)) : 0;


const save = () => {
    fs.writeFileSync(PRODUCT_FILE, JSON.stringify(listProduct));
}

const getAll = (req, res, next) => {
    return listProduct;
}

const getById = (id) => { 
    return listProduct.find(product => product.id === parseInt(id));
}
const getByName = (name) => { 
    return listProduct.find(product => product.name === name);
}


const create = (product) => { 
    let newProduct = {id: ++currentId};
    if (product.name) {
        newProduct.name = product.name;
    }
    if (product.description) {
        newProduct.description = product.description;
    }

    listProduct.push(newProduct);
    save();
    return newProduct;
}

const update = (id, product) => { 
    let ProductToUpdate = listProduct.find(product => product.id === parseInt(id));
    if (!ProductToUpdate) {
        return false;
    }
    if (product.name) {
        ProductToUpdate.name = product.name;

    }
    if (product.descritpion) {
        ProductToUpdate.descritpion = product.descritpion;
    }
    save();
}
const remove = (id) => { 
    listProduct = listProduct.filter(product => product.id !== parseInt(id));
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