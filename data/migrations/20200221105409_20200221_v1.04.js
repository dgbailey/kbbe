
exports.up = function(knex) {
  
    return knex.schema.table('board_user_bridge',function(tbl){
        
        tbl.dropForeign('user_id');
        tbl.dropColumn('user_id');
        tbl.uuid('user_uuid')
        .notNullable()
        .references('user_uuid')
        .inTable('users')
        .onDelete('CASCADE')

})
};

exports.down = function(knex) {
    return knex.schema.table('board_user_bridge',function(tbl){

        tbl
            .bigInteger('user_id')
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE')

        tbl.dropForeign('user_uuid');
        tbl.dropColumn('user_uuid');
    })
};
