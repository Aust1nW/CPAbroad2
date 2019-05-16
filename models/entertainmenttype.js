'use strict';
module.exports = (sequelize, DataTypes) => {
  const entertainmenttype = sequelize.define('entertainmenttype', {
    etid: DataTypes.INTEGER,
    type_name: DataTypes.STRING
  }, {});
  entertainmenttype.associate = function(models) {
    // associations can be defined here
  };
  return entertainmenttype;
};