'use strict';
module.exports = (sequelize, DataTypes) => {
  const entertainment = sequelize.define('entertainment', {
    eid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    locationid: DataTypes.INTEGER,
    etid: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {});
  entertainment.associate = function(models) {
    // associations can be defined here
  };
  return entertainment;
};