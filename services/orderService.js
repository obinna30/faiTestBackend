const db = require("../models");
const { Location } = db;

const orderService = {
  createOrder: async ({
    START_LATITUDE,
    START_LONGITUDE,
    END_LATITUDE,
    END_LONGITUDE,
  }) => {
    const result = await Location.create({
      START_LATITUDE,
      START_LONGITUDE,
      END_LATITUDE,
      END_LONGITUDE,
    });

    return result;
  },
};
module.exports = orderService;
