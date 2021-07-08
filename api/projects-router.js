const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => { 
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: "could not retrieve projects" });
        })
});

router.post('/', (req, res) => {
    Projects.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add project" });
        })
})

router.get('/resources', (req, res) => {
    Projects.resources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ error: "could not get resources" });
        })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add resource" });
        })
})

router.get('/tasks', (req, res) => {
    Projects.tasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get tasks" });
        })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not add task" });
        })
})

router.get('/:id/tasks', (req, res) => {
    Projects.tasksForProject(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get tasks for that project" });
        })
})

router.get('/:id', (req, res) => {
    Projects.projectLayout(req.params.id)
        .then(project => {
            Projects.tasksForProject(req.params.id)
            .then(tasks => {
                Projects.resourcesForProject(req.params.id)
                .then(resources => {
                    res.status(200).json({...project, tasks: tasks, resources: resources});
                })
            })
            .catch(err => {
                res.status(500).json({ error: "BIG ERROR"});
            })
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get that project" });
        })
})

router.get('/:id/resources', (req, res) => {
    Projects.resourcesForProject(req.params.id)
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ error: "Could not get resources for that project" });
        })
})



module.exports = router;