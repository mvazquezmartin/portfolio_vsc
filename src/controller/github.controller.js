import { Router } from 'express';
import HTTP_STATUS_CODES from '../constants/htpp-status-code.constants.js';
import axios from 'axios';
import CacheService from '../service/cache.service.js';
import path from 'path';

const chachePathStarred = path.join(
  process.cwd(),
  'src/dao/cache/file/cacheGithubStarred.json'
);
const cachePathRepos = path.join(
  process.cwd(),
  'src/dao/cache/file/cacheGithubRepos.json'
);
const cachePathProfile = path.join(
  process.cwd(),
  'src/dao/cache/file/cacheGithubProfile.json'
);
const cacheServiceStarred = new CacheService(chachePathStarred);
const cacheServiceRepo = new CacheService(cachePathRepos);
const cacheServiceProfile = new CacheService(cachePathProfile);

const router = Router();

router.get('/starred', async (req, res) => {
  try {
    const isValid = await cacheServiceStarred.isValidCache(313330998);
    if (isValid) {
      const response = await cacheServiceStarred.getAll();      
      if (response.status !== 'error') {
        const transformedData = response.payload.map((item) => ({
          id: item.id,
          owner: item.data.owner,
          name: item.data.name,
          description: item.data.description,
          html_url: item.data.html_url,
        }));

        return res.status(response.code).json({
          status: response.status,
          payload: transformedData,
        });
      }
    }

    const dataResponse = await axios.get(
      'https://api.github.com/users/mvazquezmartin/starred'
    );

    const filteredData = dataResponse.data.map((repo) => ({
      id: repo.id,
      owner: repo.owner.login,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));

    for (const repo of filteredData) {
      await cacheServiceStarred.create(repo.id, repo);
      console.log('GITHUB STARRED ⭐', repo.name);
    }

    res.status(HTTP_STATUS_CODES.OK).json({
      status: 'success',
      message: 'message',
      payload: filteredData,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', message: 'Something went wrong' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { repository } = req.query;
    const isValid = await cacheServiceRepo.isValidCache(repository);
    if (isValid) {
      const response = await cacheServiceRepo.getOne(repository);
      if (response.payload !== null) {
        return res.status(response.code).json({
          status: response.status,
          payload: response.payload,
        });
      }
    }

    const repoResponse = await axios.get(
      `https://api.github.com/repos/mvazquezmartin/${repository}`
    );

    const repositoryInfo = {
      name: repoResponse.data.name,
      description: repoResponse.data.description,
      language: repoResponse.data.language,
      html_url: repoResponse.data.html_url,
    };

    await cacheServiceRepo.create(repository, repositoryInfo);
    console.log('HELLO REPOSITORY!:', repository);
    res.status(HTTP_STATUS_CODES.OK).json({
      status: 'success',
      message: 'here is the repository',
      payload: repositoryInfo,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', message: 'Something went wrong' });
  }
});

router.get('/user', async (req, res) => {
  try {
    const isValid = await cacheServiceProfile.isValidCache('mvazquezmartin');
    if (isValid) {
      const response = await cacheServiceProfile.getOne('mvazquezmartin');
      if (response.status !== 'error') {
        return res.status(response.code).json({
          status: response.status,
          payload: response.payload,
        });
      }
    }
    const dataResponse = await axios.get(
      'https://api.github.com/users/mvazquezmartin'
    );

    const data = {
      login: dataResponse.data.login,
      avatar_url: dataResponse.data.avatar_url,
      html_url: dataResponse.data.html_url,
      location: dataResponse.data.location,
      bio: dataResponse.data.bio,
      public_repos: dataResponse.data.public_repos,
    };

    await cacheServiceProfile.create('mvazquezmartin', data);
    console.log('HELLO PROFILE!', 'mvazquezmartin');

    res.status(HTTP_STATUS_CODES.OK).json({
      status: 'success',
      message: 'User data retrieval successful.',
      payload: data,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: 'error', message: 'Something went wrong' });
  }
});

export default router;
