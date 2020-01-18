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



module.exports = {
    getMessages,
    newMessage,
    findById,
    deleteMessage
}