
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Node.js Sprint', completed: false},
        {id: 2, name: 'Resume', description: 'just copy someones layout', completed: false},
        {id: 3, name: 'Portolio', description: 'needing to be done by march', completed: false}
      ]);
    });
};
