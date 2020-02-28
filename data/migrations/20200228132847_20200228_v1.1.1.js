
exports.up = function(knex) {
    return knex.schema.alterTable('row_items',function(tbl){
        tbl.uuid('board_id')
        .references('board_id')
        .inTable('boards')
        .notNullable()
        .onDelete('Cascade')
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable(tbl, function(tbl){
        tbl.dropForeign('board_id');
        tbl.dropColumn('board_id');
    })
};
