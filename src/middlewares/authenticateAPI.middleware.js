import appConfig from "../config/app.config.js";
import HTTP_STATUS_CODES from "../constants/htpp-status-code.constants.js";

const { MY_API_KEY } = appConfig

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

export default authenticateAPIKEY;
