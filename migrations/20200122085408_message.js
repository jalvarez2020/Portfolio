
exports.up = function(knex, Promise) {
    return knex.schema.createTable('message', table => {
        table.integer('id').primary()
        table.datetime('dateTime').defaultTo(knex.fn.now());
        table.string('Name', 50).notNullable();
        table.string('Email').unique().notNullable();
        table.text('Message').notNullable();
       
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('message')
  };