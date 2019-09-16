const db = require('../data/migrations/dbConfig.js');

function find() {
    return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
    return db('users').where(filter);
}

function add(user) {
    return db('users') 
        .insert(user, 'id') 
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('users') 
        .where({ id })
        .first();
}

module.exports = {
    add,
    find,
    findBy,
    findById,
}