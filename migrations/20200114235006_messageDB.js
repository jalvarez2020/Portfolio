exports.up = function(knex, Promise) {
    return knex.schema.createTable('message', table => {
        table.integer('Id').primary()
        table.datetime('dateTime').defaultTo(knex.fn.now());
        table.string('Name', 100).notNullable();
        table.string('Email').unique().notNullable();
        table.text('Message').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('message')
  };