
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {Name: "Javier", Email: "javieralvarez82@live.com", Message: "Hello Javi!"},
      ]);
    });
};
