
exports.up = function(knex) {   
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description', 255)
                .notNullable();
            tbl.string('notes', 255)
            tbl.boolean('completed')
                .notNullable();

            // Foreign Key
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks');
};
