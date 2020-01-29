const express = require('express');
const router = express.Router();
const connection = require("../conf");

router.get('/', (request, response) => {
    connection.query('SELECT * from category', (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving categories');
     } else {
      response.json(results);
     }
   });
  })
  
  router.get('/:id', (request, response) => {
    connection.query('SELECT * from category where id = ?', [request.params.id], (err, results) => {
     if (err) {
      response.status(500).send('Error retrieving categories');
     } else {
      response.json(results);
     }
   });
  })

  module.exports = router