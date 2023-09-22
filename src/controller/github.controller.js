const { Router } = require("express");
const HTTP_STATUS_CODES = require("../constants/htpp-status-code.constants");
const { default: axios } = require("axios");
const CacheService = require("../service/cache.service");
const path = require("path");

const chachePathStarred = path.join(
  __dirname,
  "../dao/cache/file/cacheGithubStarred.json"
);
const cachePathRepos = path.join(
  __dirname,
  "../dao/cache/file/cacheGithubRepos.json"
);
const cacheServiceStarred = new CacheService(chachePathStarred);
const cacheServiceRepo = new CacheService(cachePathRepos);

const router = Router();

router.get("/starred", async (req, res) => {
  try {
    const isValid = await cacheServiceStarred.isValidCache(76931209);
    if (isValid) {
      const response = await cacheServiceStarred.getAll();
      if (response.status !== "error") {
        return res.status(response.code).json({
          status: response.status,
          payload: response.payload,
        });
      }
    }

    const dataResponse = await axios.get(
      "https://api.github.com/users/mvazquezmartin/starred"
    );

    const filteredData = dataResponse.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));

    await Promise.all(
      filteredData.map(async (repo) => {
        const data = {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
        };
        await cacheServiceStarred.create(data.id, data);
        console.log("GITHUB!:", data.id);
      })
    );

    res.status(HTTP_STATUS_CODES.OK).json({
      status: "success",
      message: "message",
      payload: filteredData,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something went wrong" });
  }
});

router.get("/repos", async (req, res) => {
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
    console.log("HELLO REPOSITORY!:", repository);
    res.status(HTTP_STATUS_CODES.OK).json({
      status: "success",
      message: "here is the repository",
      payload: repositoryInfo,
    });
  } catch (error) {
    console.log(error);
    res
      .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ status: "error", message: "Something went wrong" });
  }
});

module.exports = router;
