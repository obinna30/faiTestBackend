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
      START_LATITUDE: DataTypes.STRING,
      START_LONGITUDE: DataTypes.STRING,
      END_LATITUDE: DataTypes.STRING,
      END_LONGITUDE: DataTypes.STRING,
      DISTANCE: DataTypes.STRING,
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
