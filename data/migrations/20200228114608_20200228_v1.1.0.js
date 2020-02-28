
exports.up = function(knex) {
    return knex.schema.alterTable('row_items',function(tbl){

        tbl.integer('row_order')
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.alterTable('row_items',function(tbl){
      tbl.dropColumn('row_order');      
  })
};
