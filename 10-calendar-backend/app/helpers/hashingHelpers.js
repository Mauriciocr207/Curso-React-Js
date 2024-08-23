const bcrypt = require('bcryptjs');

function hashString(stringToHash) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(stringToHash, salt);
}

function compareStrings(string, hash) {
    return bcrypt.compareSync(string, hash);
}

module.exports = {
    hashString,
    compareStrings
}

