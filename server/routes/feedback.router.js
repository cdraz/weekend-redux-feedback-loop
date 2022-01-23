const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Set up /feedback POST route
router.post('/', (req, res) => {
    console.log('in POST');
    const feedback = req.body;

    // Write SQL query
    const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
                     VALUES ($1, $2, $3, $4)`
    const sqlValues = [
        req.body.feeling, // $1
        req.body.understanding, // $2
        req.body.support, // $3
        req.body.comments // $4
    ];

    // Submit SQL query
    pool.query(sqlText, sqlValues)
    .then( result => {
        console.log('Added feedback to the database', feedback);
        res.sendStatus(201);
    })
    .catch( err => {
        console.error('Error making database query', err);
        res.sendStatus(500);
    });
});

module.exports = router;