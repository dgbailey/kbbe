
exports.up = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){

        tbl.integer('col_order')
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.alterTable('columns',function(tbl){
      tbl.dropColumn('col_order');      
  })
};
