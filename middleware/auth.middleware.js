const jwt = require('jsonwebtoken');
require('dotenv').config();
const Role = require('../model/role.model');

const auth = (role) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        try {
            req.payload = jwt.verify(token, process.env.JWT_KEY);
            const roleToCheck = Role.getByName(role);
            if (role &&  req.payload.roles && !req.payload.roles.includes(roleToCheck.id)) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            next();
        } catch (e) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

    }
}

module.exports = auth;