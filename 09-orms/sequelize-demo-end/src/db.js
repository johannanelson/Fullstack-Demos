// 1. require Sequelize
const Sequelize = require('sequelize')

// 2. initialize a new instance of sequelize with the address to our db
const db = new Sequelize('postgres://localhost:5432/plants')

console.log(db)

// 3. run node src/db.js to show missing pg. install pg

// 4. define user model without validators (will be our table in our database)
// 8. Add validators
const User = db.define('user', {
  name: {
    type: Sequelize.STRING, // define the columns
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  address: Sequelize.STRING,
  age: Sequelize.INTEGER,
})

const Plant = db.define('plant', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  needsWatering: Sequelize.BOOLEAN,
})

// 8. Associations
User.hasMany(Plant)
Plant.belongsTo(User)

// 5. Connect and sync everything to the database. what kind of operation is conneting to a database? asynchronous!
const connect = async () => {
  // 7. If you add {force: true}, it drops and reintializes all the tables. Add new column to define and create lines without force true to show error.
  await db.sync() // connects everything
  console.log('DB has been synced.')

  const johanna = await User.create({
    name: 'Johanna',
    email: 'j@gmail.com',
    address: 'NYC',
    age: 22
  })

  const eugene = await Plant.create({
    name: 'Eugene',
    type: 'pothos',
    needsWatering: true
  })

  // Magic methods
  johanna.addPlant(eugene)
  console.log(await johanna.getPlants())
}

connect()
// 6. Run src/db.js again and show SQL execution

// 7. Hooks: sequelize objects go through a lifecycle. validate, create, destroy

User.afterCreate((user) => {
  console.log(`User ${user.name} was created`);
});

User.beforeCreate((user) => {
  console.log(`About to create the user ${user.name}`);
});

// 8. add associations above

// 9. Class methods: operates on the entire model
// 10. Instance methods: operates on a single instance
// 11. Virtuals: columns that don't get saved to the db but are calculated on the fly
// 12. Getters/setters



// 1. Instantiate sequelize by connecting to a database.
// 2. define our models by adding fields, default values, validations, etc
// 3.  Connect the models to an actual table in the database. The tables don't exist in our db until we sync the models to our database!
// 4. Use the model to find or create instances (rows in the db)

