// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/messageDB.sqlite3'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: {
      database: '',
      user:     process.env.USER,
      password: process.env.PASSWORD
    },

    

    migrations: {
      directory: './Data/migrations'
    },
    seeds: {
      directory: './Data/seeds'
    },
  }

};
