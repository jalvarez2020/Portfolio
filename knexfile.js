// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/messageDB.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations/'
    },
    seeds: {
      directory: './seeds/'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },

    


  }

};
