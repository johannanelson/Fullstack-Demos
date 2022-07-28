const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cldnry.s-nbcnews.com%2Fimage%2Fupload%2Ft_social_share_1200x630_center%2Cf_auto%2Cq_auto%3Abest%2Fnewscms%2F2019_07%2F1410464%2Fkit_kat_small_bars_main.jpg&imgrefurl=https%3A%2F%2Fwww.today.com%2Ffood%2Fkit-kat-bars-are-made-ground-kit-kats-t106777&tbnid=Ml5mg9u1QcnPoM&vet=12ahUKEwiW6qOj7_D1AhWEqnIEHQQADn4QMygNegUIARDpAg..i&docid=Z9kKU2vRlSSSfM&w=1200&h=630&q=kit%20kat&ved=2ahUKEwiW6qOj7_D1AhWEqnIEHQQADn4QMygNegUIARDpAg'
  }
});
