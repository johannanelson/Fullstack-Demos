const Sequelize = require('sequelize');
const Op = Sequelize.Op;


// Our Sequelize db instance
const db = new Sequelize("postgres://localhost:5432/imdb");

// First model: Movie model. With attributes title, releaseYear, rating
const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 2022
    }
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

// Second model: Actor model. With attributes name, birthYear, deathYear
const Actor = db.define("actor", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  birthYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 2022
    }
  },
  deathYear: {
    type: Sequelize.INTEGER,
    validate: {
      max: 2022
    }
  }
})

// Many to many association
Actor.belongsToMany(Movie, {through: 'actor-movie'});
Movie.belongsToMany(Actor, {through: 'actor-movie'});

/*
CLASS METHOD: query something based on the whole model.
                -------> findAll(), findByPk()
INSTANCE METHOD: query something based on a single instance
                --------> update(), destroy(), findAll() with a WHERE clause specific to a single instance
*/

// Class method
Movie.getEverything = async function () {
  const movies = await Movie.findAll({
    include: Actor
  })
  return movies;
}

Movie.get2000sMovies = async function () {
  const movies = await Movie.findAll({
    where: {
      releaseYear: {
        [Op.between]: [2000, 2010]
      }
    }
  })
  return movies;
}

// Actor.getActorAndTheirMovies(actor);
Actor.getActorAndTheirMovies = async function(selectedActor) {
  const actor = await Actor.findAll({
    where: {
      name: selectedActor.name
    },
    include: Movie
  })
  return actor;
}


// heathLedger.getActorAndTheirMovies();
// this.name = 'Heath Ledger'
Actor.prototype.getActorAndTheirMovies = async function () {
  const actor = await Actor.findAll({
    where: {
      name: this.name
    },
    include: Movie
  })
  return actor;
}

Actor.beforeCreate(actorInstance => {
  if (actorInstance.deathYear) {
    actorInstance.name = actorInstance.name.concat(' (deceased)')
  }
})

module.exports = {
  Movie,
  Actor,
  db
}
