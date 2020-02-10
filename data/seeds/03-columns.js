

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('columns').del()
    .then(function () {
      // Inserts seed entries
      return knex('columns').insert([
        {column_id: 'f58aa0f5-34b2-44e6-a985-9118d9c96b01', board_id:'4d52330c-37cb-11ea-978f-2e728ce88125', column_name: 'col1'},
        {column_id: '02e23930-c553-4741-95d8-f5ae36af2fe6', board_id:'4d52330c-37cb-11ea-978f-2e728ce88125', column_name: 'col2'},
        {column_id: 'f5979f30-0c70-48be-a27d-497f89dd7c60', board_id:'4d52330c-37cb-11ea-978f-2e728ce88125', column_name: 'col3'},
        {column_id: '7ed85f6f-e9c4-48da-bec7-d4a687b416b1', board_id:'4d52330c-37cb-11ea-978f-2e728ce88125', column_name: 'col4'}
      ]);
    });
};
