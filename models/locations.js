'use strict';
module.exports = (sequelize, DataTypes) => {
  const locations = sequelize.define('locations', {
    name: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
      timestamps:false
  });
  locations.associate = function(models) {
    // associations can be defined here
  };
  return locations;
};