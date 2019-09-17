const express = require('express');
const usersRoute = require('./routes/usersRoute.js');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const dbConnection = require('./data/migrations/dbConfig.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(
    session({
        name: 'monkey',
        secret: 'just the to two of us',
        cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: false,
            httpOnly: true,
        },
        resave: false,
        saveUninitialized: false,
        store: new KnexSessionStore({
            knex: dbConnection,
            tablename: 'knexSessionStore',
            sidefieldname: 'sessionid',
            createtable: true,
            clearInterval: 1000 * 60 * 60,
        })
    })
);

server.use('/api', usersRoute)

server.use('/', (req, res) => {
    res.send(`<h2>Root Route is Printing something!!!</h2>`)
});

module.exports = server;