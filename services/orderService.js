const db = require("../models");
const { Location } = db;
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const orderService = {
  createOrder: async ({
    START_LATITUDE,
    START_LONGITUDE,
    END_LATITUDE,
    END_LONGITUDE,
  }) => {

    
    const locationDistance = await axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${START_LATITUDE},${START_LONGITUDE}&destinations=${END_LATITUDE},${END_LONGITUDE}&key=${process.env.GOOGLE_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        return res.data
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });

      console.log("location",locationDistance);
    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
    function calcCrow(lat1, lon1, lat2, lon2) {
      var R = 6371; // km
      var dLat = toRad(lat2 - lat1);
      var dLon = toRad(lon2 - lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    }

    // Converts numeric degrees to radians
    function toRad(Value) {
      return (Value * Math.PI) / 180;
    }

    const DISTANCE = calcCrow(
      START_LATITUDE,
      START_LONGITUDE,
      END_LATITUDE,
      END_LONGITUDE
    );
    const result = await Location.create({
      START_LATITUDE,
      START_LONGITUDE,
      END_LATITUDE,
      END_LONGITUDE,
      DISTANCE,
    });

    return result;
  },
  takeOrder: async ({ id, status }) => {
    const order = await Location.findOne({ where: { id } });
    if (order.STATUS === "TAKEN") {
      return {
        status: "TAKEN ALREADY",
      };
    } else {
      await Location.update({ STATUS: status }, { where: { id } });
      return {
        status: "SUCCESS",
      };
    }
  },
  orderList: async ({ limit, offset }) => {
    const result = await Location.findAndCountAll({ limit, offset });
    return result;
  },
};
module.exports = orderService;
