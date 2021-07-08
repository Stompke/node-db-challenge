
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .unique()
                .notNullable();
            tbl.string('description', 255)
            tbl.boolean('completed')
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('projects');
};
