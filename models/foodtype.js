'use strict';
module.exports = (sequelize, DataTypes) => {
  const foodtype = sequelize.define('foodtype', {
    fid: DataTypes.INTEGER,
    c_name: DataTypes.STRING
  }, {});
  foodtype.associate = function(models) {
    // associations can be defined here
  };
  return foodtype;
};