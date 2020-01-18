const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

getMessages = () => {
    return db('message');
}

newMessage = (message) => {
    return db('message').insert(message);
}

findById = (id) => {
    return db('message').where('Id', id).first();
}

deleteMessage = (id) => {
    return db('message').where('Id', id).del();
}

updateMessageNotes = (id, message) => {
    return db('message').where('Id', id).update(message);
}

module.exports = {
    getMessages,
    newMessage,
    findById,
    deleteMessage
}