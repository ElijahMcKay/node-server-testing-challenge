
exports.up = function(knex) {
    return knex.schema.createTable('animals', tbl => {
        tbl.increments()
        tbl.string('dogs')
            .notNullable()
        tbl.string('cats')
            .notNullable()
        tbl.string('birds')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('animals'); 
};
