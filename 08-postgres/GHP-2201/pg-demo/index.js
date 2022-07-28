/* PG METHODS
      1. connect() --> open connection
      2. end()     --> end connection
      3. query()   --> sending a SQL query via your client to your db
*/

const pg = require('pg');

// 1. Define our postgresURL. This is the URL connecting to our database.
// postgresProtocol://localhost/dbName
const postgresUrl = 'postgres://localhost/hogwarts'

// 2. Create a new instance of a node-postgres (pg) client, and putting in
//    the postgresUrl so that this client associates to my hogwarts db.
const client = new pg.Client(postgresUrl)

// 3. Define a connector function that connects my client to my db
const connector = async () => {
  try {
    await client.connect();
    console.log('Successfully connected!')
  } catch(error) {
    console.error(error);
    // When there's an error, we need to close the connection
    await client.end();
  }
}

connector();

module.exports = client;
