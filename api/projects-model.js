const db = require('../data/db-config');

module.exports = {
    get,
    addProject,
    resources,
    addResource,
    tasks,
    addTask,
    tasksForProject,
    projectLayout
}

function get() {
    return db('projects');
}

function addProject(project) {
    console.log(project)
    return db('projects')
        .insert(project)
}

function resources() {
    return db('resources');
}

function addResource(resource) {
    return db('resources')
        .insert(resource);
}

function tasks() {
    return db('tasks');
}

function addTask(task) {
    return db('tasks')
        .insert(task);
}

function tasksForProject(id) {
    return db('tasks as t')
        .select('p.name as ProjectName','p.description as ProjectDescription','t.description as TaskDescription', 't.notes as TaskNotes', 't.completed as TaskCompleted')
        .join('projects as p','t.project_id','p.id')
        .where({ project_id: id })
}

function projectLayout(id) {
    return db('projects as p')
        .select('p.id as ProjectId','p.name as ProjectName', 'p.description as ProjectDescription')
        .where({  id })
        // .join('tasks as t','t.project_id','p.id')
}