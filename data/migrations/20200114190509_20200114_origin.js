
exports.up = function(knex){
  return knex.schema

    .createTable('users',function(tbl){

        tbl.increments('user_id')
        
    })

    .createTable('boards',function(tbl){
        tbl.uuid('board_id')
        tbl.unique('board_id')
    })

    .createTable('board_user_bridge',function(tbl){
        tbl
            .uuid('board_id')
            .notNullable()
            .references('board_id')
            .inTable('boards')
            .onDelete('Cascade')

        tbl
            .bigInteger('user_id')
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onDelete('CASCADE')
    })

    .createTable('columns',function(tbl){

        tbl 
            .uuid('column_id')
            .notNullable()
          
        
        tbl
            .string('column_name',255)
        
        tbl.unique('column_id')

    })

    .createTable('row_items',function(tbl){

        tbl.uuid('item_id')
            .notNullable()
            .unique('item_id')

        tbl
            .uuid('column_id')
            .notNullable()
            .references('column_id')
            .inTable('columns')

        tbl
            .text('item_content')
    


    })

  
};

exports.down = function(knex) {
    knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('boards')
    .dropTableIfExists('board_user_bridge')
    .dropTableIfExists('columns')
    .dropTableIfExists('row_items')

};
