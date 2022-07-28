const pg = require('pg')
// We already have the connection to our database here, so we're going to create a postgresUrl. this is the url connecting to our database. postgresProtocol://localhost/dbName
const postgresUrl = 'postgres://localhost/hogwarts'

// We're creating a new instance of a pg client, and putting in the postgresUrl so that this client connects to the corresponding database
const client = new pg.Client(postgresUrl)

// if i'm trying to get data from postgres, what type of code is that? synchronous or async? it's async.
const connector = async () => {
  try {
    // We want to connect client to DB; we now have an open connetion
    await client.connect() // 1
    console.log('Successfully connected!')
    // First query: select all students from database
    const data = await client.query(`SELECT * FROM students;`) // 3
    console.log(data)
    // 2nd query: select a single student from database
    const singleData = await client.query(`SELECT * FROM students WHERE id = 1;`)
    // .rows makes it possible to just log the data from the database; it's one of the properties of the data object
    console.log(singleData.rows)
  } catch (error) {
    console.log('An error occurred: ', error)
    // When there's an error, we want to close the connection
    await client.end() // 2
  }
}

connector()

module.exports = client;
