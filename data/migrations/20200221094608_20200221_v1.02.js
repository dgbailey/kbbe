
exports.up = function(knex) {
  //add uuid format to user id
  //add username varchar column to users
  return knex.schema.table('users',function(tbl){

   
    tbl.uuid('user_uuid')
    
    tbl.string('username',255)
    .notNullable()
    tbl.unique('username')

  })
};

exports.down = function(knex) {
  return knex.schema.table('users',function(tbl){

  
    tbl.dropColumn('user_uuid')
    tbl.dropColumn('username')
    
  })
};
