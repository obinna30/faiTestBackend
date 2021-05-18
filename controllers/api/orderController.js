const orderService = require("../../services/orderService");

const orderController = {
  createOrder: async (req, res) => {
    const { origin, destination } = req.body;

    const isLatitude = (num) => isFinite(num) && Math.abs(num) <= 90;
    const isLongitude = (num) => isFinite(num) && Math.abs(num) <= 180;

    // if ( START_LATITUDE == isLatitude) {

    // }

    try {
      const START_LATITUDE = isLatitude(origin[0]) ? origin[0] : null;
      const START_LONGITUDE = isLongitude(origin[1]) ? origin[1] : null;
      const END_LATITUDE = isLatitude(destination[0]) ? destination[0] : null;
      const END_LONGITUDE = isLongitude(destination[1]) ? destination[1] : null;
      console.log(START_LATITUDE, START_LONGITUDE, END_LATITUDE, END_LONGITUDE);
      if (
        START_LATITUDE &&
        START_LONGITUDE &&
        END_LATITUDE &&
        END_LONGITUDE != null
      ) {
        const result = await orderService.createOrder({
          START_LATITUDE,
          START_LONGITUDE,
          END_LATITUDE,
          END_LONGITUDE,
        });

        return res.json({
          id: result.id,
          distance: result.DISTANCE,
          status: result.STATUS,
        });
      } else {
        return res.status(500).json({
          error: "ERROR_DESCRIPTION",
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "ERROR_DESCRIPTION",
      });
    }
  },
  takeOrder: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const result = await orderService.takeOrder({ id, status });
      //   console.log(result)
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "ERROR_DESCRIPTION",
      });
    }
  },
  orderList: async (req, res) => {
    const page = parseInt(req.query.page); // Make sure to parse the limit to number
    const limit= parseInt(req.query.limit); // Make sure to parse the limit to number
    const offset = (page - 1) * limit; // Make sure to parse the skip to number

    console.log(page, limit, offset);
    try {
      const result = await orderService.orderList( {limit, offset} );
      console.log("result", result);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        error: "ERROR_DESCRIPTION",
      });
    }
  },
};

module.exports = orderController;
