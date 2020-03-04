// Router for cake-related requests
const express = require('express');

// Create the router
const router = express.Router()

// cs-linuxlab-40.stlawu.edu:3000/cakes/
router.get('/', function(request, response)  {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Vanilla</a></li>
    </ul>
    `);
});

// cs-linuxlab-40.stlawu.edu:3000/cakes/id
router.get('/:id', function(request, response, next)  {
  if (request.params.id === 'vanilla')  {  // if you visit the vanilla link then
    response.send('Vanilla cakes');
  } else if(request.params.id === 'chocolate')  {
    response.send('Chocolate cakes');
  }  else  {
    next();  // Pass on this request
  }
});

module.exports = router;
