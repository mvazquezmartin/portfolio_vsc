import { Router } from 'express';
import path from 'path';
import axios from 'axios';
import appConfig from '../config/app.config.js';
import HTTP_STATUS_CODES from '../constants/htpp-status-code.constants.js';
import CacheService from '../service/cache.service.js';
// import __dirname from '../utils/dirname.util.js';

const { API_KEY } = appConfig;
const cachePath = path.join(process.cwd(), 'src/dao/cache/file/cacheYoutube.json');
const cacheService = new CacheService(cachePath);

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { channelId } = req.query;

    const isValidCache = await cacheService.isValidCache(channelId);
    if (isValidCache) {
      const response = await cacheService.getOne(channelId);
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

    //await cacheService.delete(channelId);
    await cacheService.create(channelId, channelInfo);

    console.log('HELLO WORLD!:', channelData.brandingSettings.channel.title);

    res.status(dataResponse.status).json({
      status: dataResponse.statusText,
      payload: channelInfo,
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      const errorMessage = error.response.data.error.message;
      console.error('Error from YouTube API:', errorMessage);
    } else {
      console.error('Unknown error:', error.message);
    }
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', message: 'Something went wrong' });
  }
});

export default router;
