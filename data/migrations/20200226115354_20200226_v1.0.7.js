
exports.up = function(knex) {
  return knex.schema.alterTable('boards',function(tbl){

        tbl.string('name',225)
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schmema.table('boards',function(tbl){
        tbl.dropColumn('name');
    })
};
