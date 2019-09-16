const express = require('express');
const bcrypt = require('bcryptjs');

const userDb = require('./usersModel.js');
const middleware = require('./usersMiddleware.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Users route works'})
});

router.post('/register', middleware.validateBody, (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    userDb.add(user) 
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error)
        });
});





module.exports = router;