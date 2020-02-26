
exports.up = function(knex) {
  return knex.schema.alterTable('boards',function(tbl){

    tbl.uuid('board_id').notNullable().alter()
  })
};

exports.down = function(knex) {
    return knex.schema.alterTable('boards',function(tbl){

        tbl.uuid('board_id').alter()
      })
};
