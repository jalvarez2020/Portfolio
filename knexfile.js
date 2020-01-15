// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/messageDB.sqlite3'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: '',
      user:     process.env.USER,
      password: process.env.PASSWORD
    },

    useNullAsDefault: true,

    migrations: {
      directory: './Data/migrations'
    },
    seeds: {
      directory: './Data/seeds'
    },
  }

};
