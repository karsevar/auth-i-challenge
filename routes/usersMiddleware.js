const bcrypt = require('bcryptjs');
const userDb = require('./usersModel.js')

function validateBody(req, res, next) {
    const {username, password} = req.body;
    if (username && password) {
        next();
    } else {
        res.status(401).json({message: "will need to provide username or password"})
    }
}

function restricted(req, res, next) {
    const {username, password} = req.headers;

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'You shall not pass'})
    }
}

module.exports = {
    validateBody,
    restricted
};