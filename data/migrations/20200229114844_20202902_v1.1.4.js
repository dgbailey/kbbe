exports.up = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){
        tbl.dropColumn('col_order')
        tbl.float('pos')
        .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){
        tbl.integer('col_order')
        .notNullable()
        tbl.dropColumn('pos');
    })
};