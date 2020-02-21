
exports.up = function(knex) {
    return knex.schema.alterTable('users',function(tbl){
        tbl.dropColumn('user_id')
       
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users',function(tbl){
        tbl.increments('user_id')
    })
};
