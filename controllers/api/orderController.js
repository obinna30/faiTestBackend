const orderService = require("../../services/orderService");

const orderController = {
  createOrder: async (req, res) => {
    const { origin, destination } = req.body;

    const START_LATITUDE = origin[0];
    const START_LONGITUDE = origin[1];
    const END_LATITUDE = destination[0];
    const END_LONGITUDE = destination[1];

    try {
      const result = await orderService.createOrder({
        START_LATITUDE,
        START_LONGITUDE,
        END_LATITUDE,
        END_LONGITUDE,
      });

      return res.json({
        id: result.id,
        // "distance": <total_distance>,
        status: result.STATUS,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "ERROR_DESCRIPTION",
      });
    }
  },
};

module.exports = orderController;
