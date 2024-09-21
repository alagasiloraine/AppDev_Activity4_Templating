const express = require('express');

const router = express.Router();
const mp3Controller = require("../controller/MP3Controller");

router.get('/', mp3Controller.index);
router.get('/mp3/playlist', mp3Controller.playlist);
router.get('/mp3/artist', mp3Controller.artist);
router.get('/mp3/albums', mp3Controller.albums);
router.get('/mp3/favorites', mp3Controller.favorites);

module.exports = router;