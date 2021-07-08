
exports.up = function(knex) {
    return knex.schema
        .createTable('projects_resources', tbl => {
            tbl.primary(['project_id','resource_id'])

            //foreign key
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

            //foreign key
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_resources');
};
