"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      START_LATITUDE: DataTypes.FLOAT,
      START_LONGITUDE: DataTypes.FLOAT,
      END_LATITUDE: DataTypes.FLOAT,
      END_LONGITUDE: DataTypes.FLOAT,
      DISTANCE: DataTypes.FLOAT,
      STATUS: {
        type: DataTypes.STRING,
        defaultValue: "UNASSIGNED",
      },
    },
    {
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};
