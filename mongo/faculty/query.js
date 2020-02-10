// Query the faculty Database

const mongoose = require('mongoose');
const connect = require('./db');  // connect the db file
const Professor = require('./schema');

connect(); // To the database

// What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors)  {
  if (error) console.error(error.stack);
  console.log(professors);
  
});
