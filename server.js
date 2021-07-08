const express = require('express');

const ProjectsRouter = require('./api/projects-router');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ message: "It's working!!" });
})

module.exports = server;