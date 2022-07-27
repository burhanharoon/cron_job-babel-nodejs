"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class universal_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  universal_data.init(
    {
      title: DataTypes.STRING,
      move_status: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "universal_data",
    }
  );
  return universal_data;
};
