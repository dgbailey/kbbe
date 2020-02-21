
exports.up = function(knex) {

return knex.schema.alterTable('users',function(tbl){


    tbl.unique('user_uuid');
    

})

  
};

exports.down = function(knex) {
    return knex.schema.table('users',function(tbl){


        tbl.dropUnique('user_uuid');
        
    
    })
   
};
