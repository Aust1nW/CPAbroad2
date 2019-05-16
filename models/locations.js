'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    locationid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    continent: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  locations.associate = function(models) {
    // associations can be defined here
  };
  return locations;
};