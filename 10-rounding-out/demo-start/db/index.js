const Sequelize = require('sequelize')

const db = new Sequelize("postgres://localhost:5432/hogwarts", {logging: false})

const Student = db.define("student", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  wand: {
    type: Sequelize.STRING,
    allowNull: true
  },
  pet: {
    type: Sequelize.STRING,
    allowNull: true
  },
  quidditchPlayer: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

const House = db.define("house", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  headOfHouse: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mascot: {
    type: Sequelize.STRING,
    allowNull: false
  },
  founder: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

//Student.belongsTo(House)
//House.hasMany(Student)

Student.belongsToMany(House, { through: 'house-student'})
House.belongsToMany(Student, { through: 'house-student'})


console.log(Object.keys(House.prototype))
console.log(Object.keys(Student.prototype))


// These models are constructor functions - so we can define class an dinstance methods on our models.
//console.log(typeof House())

// Class method to get all houses and students
House.getEverything = async function () {
  const houses = await House.findAll({
    include: Student
  });
  return houses;
}

// Instance method (method on your prototype)
Student.prototype.getWand = function () {
  return `${this.name}'s wand is made of ${this.wand}'`
}
module.exports = {
  Student,
  House,
  db
}


