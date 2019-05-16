'use strict';
module.exports = (sequelize, DataTypes) => {
  const landmarks = sequelize.define('landmarks', {
    lid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    locationid: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  landmarks.associate = function(models) {
    // associations can be defined here
  };
  return landmarks;
};