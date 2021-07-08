
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'computer'},
        {id: 2, name: 'internet'},
        {id: 3, name: 'pen & paper'},
        {id: 4, name: 'coffee', description: 'dont forget the creamer!'},
        {id: 5, name: 'Lambda Notes', description: 'access on local machine'}

      ]);
    });
};
