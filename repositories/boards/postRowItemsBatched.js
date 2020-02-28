
const db = require('../../dbConfig');


async function insertRowItemBatch(batchRowContent) {
    //insert(data, [returning])

    try{
        let status = await db('row_items').insert(batchRowContent);
        return status
    }
    catch(err){
        throw new Error(`Server Error - Repository insertRowItemBatch - ${err}`);
    }
    

}