const db = require('../../dbConfig');


const getColumnsByBoardId = bId => {
    console.log('BID',bId)
   
    let query = `SELECT * FROM (SELECT * FROM columns LEFT JOIN row_items using(column_id)) as s WHERE  s.board_id = '${bId}';`
    console.log(query)
    return db.raw(query)


}

module.exports = getColumnsByBoardId;


