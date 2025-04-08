const User = require('../model/user.model');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const login = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = User.getByEmail(email);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY);

    res.status(200).json({ token });
};

module.exports = {
    login
};
