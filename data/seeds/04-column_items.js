const uuid4 = require('uuid4');




exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('row_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('row_items').insert([
        {item_id: uuid4(),column_id:'f58aa0f5-34b2-44e6-a985-9118d9c96b01',item_content:'sampletext'},
        {item_id: uuid4(),column_id:'f58aa0f5-34b2-44e6-a985-9118d9c96b01','item_content':'sampletext'},
        {item_id: uuid4(),column_id:'02e23930-c553-4741-95d8-f5ae36af2fe6','item_content':'sampletext'},
        {item_id: uuid4(),column_id:'02e23930-c553-4741-95d8-f5ae36af2fe6',item_content:'sampletext'},
        {item_id: uuid4(),column_id:'f5979f30-0c70-48be-a27d-497f89dd7c60','item_content':'sampletext'},
        {item_id: uuid4(),column_id:'f5979f30-0c70-48be-a27d-497f89dd7c60','item_content':'sampletext'},
        {item_id: uuid4(),column_id:'7ed85f6f-e9c4-48da-bec7-d4a687b416b1','item_content':'sampletext'}
      ]);
    });
};
