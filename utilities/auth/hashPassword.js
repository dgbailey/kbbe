const bcrypt = require('bcryptjs');

function generateHash(rawPassword){
    const hash = bcrypt.hashSync(rawPassword, 8);
    return hash
}

module.exports = generateHash;