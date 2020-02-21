
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Meet MVP', notes: 'very important!', completed: false, project_id: 1},
        {id: 2, description: 'Do Stretch', completed: false, project_id: 1},
        {id: 3, description: 'Find cool resumes', notes: 'look on linked in', completed: false, project_id: 2},
        {id: 4, description: 'Insert my content', completed: false, project_id: 2},
        {id: 5, description: 'Buy domain shawntompke.com', notes: 'from goDaddy', completed: false, project_id: 3},
        {id: 6, description: 'create react app', completed: false, project_id: 3}
      ]);
    });
};

