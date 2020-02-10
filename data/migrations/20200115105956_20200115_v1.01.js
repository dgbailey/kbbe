
exports.up = function(knex) {
  return knex.schema.alterTable('columns',function(tbl){
      tbl
        .uuid('board_id')
        .notNullable()
        .references('board_id')
        .inTable('boards')
        .onDelete('Cascade')
  })
};

exports.down = function(knex) {
    return knex.schema.alterTable('columns',function(tbl){

        tbl
            .dropColumn('board_id')


    })
  
};
