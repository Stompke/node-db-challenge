const db = require('../data/db-config');

module.exports = {
    projects
}

function projects() {
    return db('projects');
}