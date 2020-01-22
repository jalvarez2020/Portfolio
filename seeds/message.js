
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {Name: "Javi", Email: "javi@email.com", Message: " I hope this works"}
      ]);
    });
};
