const { Pool } = require('pg');
const PG_URL =
  'postgres://bhccbdvv:f6BYExh3fCaWaTfTX8h48wp7CTY8DCGz@drona.db.elephantsql.com:5432/bhccbdvv';
// const PG_URL = process.env.PG_URL;

const pool = new Pool({
  connectionString: PG_URL,
});

module.exports = {
  query: (text, params, cb) => {
    console.log('executed query', text);
    return pool.query(text, params, cb);
  },
};
