const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

getMessages = () => {
    return db('messages');
}

newMessage = (message) => {
    return db('message').insert(message);
}

findById = (id) => {
    return db('message').where('id', id).first();
}

deleteMessage = (id) => {
    return db('message').where('id', id).del();
}

updateMessageNotes = (id, message) => {
    return db('message').where('id', id).update(message);
}

module.exports = {
    getMessages,
    newMessage,
    findById,
    deleteMessage

}