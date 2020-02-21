const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => { 
    res.status(200).json({ message: "made it to /api/projects !!!" });
});



module.exports = router;