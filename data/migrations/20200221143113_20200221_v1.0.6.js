
exports.up = function(knex) {
    return knex.schema.alterTable('users',function(tbl){
        tbl.
            string('password',225)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable.dropColumn('password');
};
