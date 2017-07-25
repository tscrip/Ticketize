const Config_DB = require('../config').DB;

// Creating connection to DB
const Knex = require('knex')(Config_DB);