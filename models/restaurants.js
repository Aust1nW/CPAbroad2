'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurants = sequelize.define('restaurants', {
    rid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    foodid: DataTypes.INTEGER,
    locationid: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  restaurants.associate = function(models) {
    // associations can be defined here
  };
  return restaurants;
};