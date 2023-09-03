const { Router } = require("express");
const { API_KEY } = require("../config/apiGoogle");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const { default: axios } = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { channelId } = req.query;

    const dataResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,snippet&id=${channelId}&key=${API_KEY}`
    );

    // const videosResponse = await axios.get(
    //   `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=4&key=${API_KEY_YOUTUBE}`
    // );

    const channelData = dataResponse.data.items[0];
    //const videos = videosResponse.data.items;

    console.log(channelData.error)

    // const videoInfo = videos.map((video) => ({
    //   videoId: video.id.videoId,
    //   title: video.snippet.title,
    //   thumbnail: video.snippet.thumbnails.high.url,
    //   videoLink: `https://www.youtube.com/watch?v=${video.id.videoId}&ab_channel=${channelData.snippet.title}`,
    // }));

    const channelInfo = {
      channel: channelData.brandingSettings.channel.title,
      customUrl: channelData.snippet.customUrl,
      description: channelData.brandingSettings.channel.description,
      banner: channelData.brandingSettings.image.bannerExternalUrl,
      thumbnails: channelData.snippet.thumbnails.default.url,
      //latestVideo: videoInfo,
    };

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
