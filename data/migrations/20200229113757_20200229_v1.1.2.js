
exports.up = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){
        tbl.float('col_order').alter();
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){
        tbl.integer('col_order').alter();
    })
};
