
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {board_id: '4d52330c-37cb-11ea-978f-2e728ce88125'},
      
      ]);
    });
};
