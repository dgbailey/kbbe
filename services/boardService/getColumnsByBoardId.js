const getColumnsByBoardId = require('../../repositories/columns/getColumnsByBoardId');

const getColumnsByBoardIdService = async (bId) => {
	const { rows: responseColumns } = await getColumnsByBoardId(bId);

	// TODO:error handling
	let response = { cols: {} };

	responseColumns.forEach((c) => {
		let columnId = c.column_id;
		if (response.cols[columnId]) {
			if (response.cols[columnId].items) {
				let addition = { text: c.item_content, id: c.item_id };

				response.cols[columnId].items.push(addition);
			}
		} else {
			response.cols[c.column_id] = { id: c.column_id, items: [ { text: c.item_content, id: c.item_id } ] };
		}
	});

	return Promise.resolve(response);
};

module.exports = getColumnsByBoardIdService;
