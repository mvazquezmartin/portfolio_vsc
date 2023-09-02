const { Router } = require("express");
const { API_KEY_YOUTUBE } = require("../config/apiGoogle");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const { default: axios } = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { channelId } = req.query;

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet&id=${channelId}&key=${API_KEY_YOUTUBE}`
    );

    const channelData = response.data.items[0];

    const channelInfo = {
      user: channelData.brandingSettings.channel.title,
      description: channelData.brandingSettings.channel.description,
      banner: channelData.brandingSettings.image.bannerExternalUrl,
      thumbnails: channelData.snippet.thumbnails.default.url,
    };

    res.status(response.status).json({
      status: response.statusText,
      payload: channelInfo,
    });
  } catch (error) {
    console.error(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something went wrong" });
  }
});

module.exports = router;
