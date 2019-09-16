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

    if (username && password) {
        userDb.findBy({username})
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({message: "You Shall Not Pass!"})
                }
            })
            .catch(error => {
                res.status(500).json(error)
            })
    }
}

module.exports = {
    validateBody,
    restricted
};