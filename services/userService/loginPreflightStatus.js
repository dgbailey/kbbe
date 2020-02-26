//service that gets user metadata for successful 'preflight' validation of JWT
const getBoardMetaByUserId = require('../../repositories/boards/getBoardMetaByUserId');
async function loginPreflightMetaData(userId){
    try{
        let [boardMetaDataExists,boardMetaData] = await getBoardMetaByUserId(userId);
        if(boardMetaDataExists){
            return boardMetaData
        }
        else{
            return null
        }
        //would we ever have no meta data for a returning user?
        
    }
    catch(err){
        throw new Error(`Server Error: User service getBOardMetaByUserId ${err}`);
    }
    
}

module.exports = getBoardMetaByUserId;
