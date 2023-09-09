const { MY_API_KEY } = require("../config/app.config");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");

require("dotenv").config();

const authenticateAPIKEY = (req, res, next) => {
  const apiKey = req.headers["api-key"];

  if (!apiKey || apiKey !== MY_API_KEY) {
    return res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json({
      status: "error",
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = authenticateAPIKEY;
