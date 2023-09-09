const { Router } = require("express");
const { API_KEY } = require("../config/app.config");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const { default: axios } = require("axios");
const CacheService = require("../service/cacheYoutube.service");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { channelId } = req.query;

    const isValid = await CacheService.isValidCache(channelId);
    if (isValid) {
      const response = await CacheService.getOne(channelId);
      if (response.payload !== null) {
        return res.status(response.code).json({
          status: response.status,
          payload: response.payload,
        });
      }
    }

    const [dataResponse, videosResponse] = await Promise.all([
      axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet&id=${channelId}&key=${API_KEY}`
      ),
      axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=4&key=${API_KEY}`
      ),
    ]);

    const channelData = dataResponse.data.items[0];
    const videos = videosResponse.data.items;

    const videoInfo = videos.map((video) => ({
      videoId: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      videoLink: `https://www.youtube.com/watch?v=${video.id.videoId}&ab_channel=${channelData.snippet.title}`,
    }));

    const channelInfo = {
      channel: channelData.brandingSettings.channel.title,
      customUrl: channelData.snippet.customUrl,
      description: channelData.brandingSettings.channel.description,
      banner: channelData.brandingSettings.image.bannerExternalUrl,
      thumbnails: channelData.snippet.thumbnails.default.url,
      latestVideo: videoInfo,
    };

    //await CacheService.delete(channelId);
    await CacheService.create(channelId, channelInfo);

    console.log("HELLO WORLD!:", channelData.brandingSettings.channel.title);

    res.status(dataResponse.status).json({
      status: dataResponse.statusText,
      payload: channelInfo,
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const errorMessage = error.response.data.error.message;
      console.error("Error from YouTube API:", errorMessage);
    } else {
      console.error("Unknown error:", error.message);
    }
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something went wrong" });
  }
});

module.exports = router;
