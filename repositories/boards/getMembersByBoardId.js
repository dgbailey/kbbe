const db = require('../../dbConfig');
const RepositoryError = require('../../utilities/errors/repositoryError');
// https://stackoverflow.com/questions/49665023/does-knex-js-prevent-sql-injection/49665379
async function getMembersByBoardId(boardId) {
	try {
 
        let query = 'SELECT ub.user_uuid,u.username FROM (SELECT user_uuid FROM board_user_bridge WHERE board_id = ?) ub INNER JOIN (SELECT *  FROM users) u ON u.user_uuid = ub.user_uuid'
		let {rows:boardMembers} = await db.raw(query,[boardId]);
		return boardMembers
	} catch (err) {
		throw new RepositoryError('getMembersByBoardId', err);
	}
}

module.exports = getMembersByBoardId
;