const express = require('express');

const router = express.Router();
const mp3Controller = require("../controller/MP3Controller");

router.get('/', mp3Controller.index);
router.get('/mp3/albums', mp3Controller.albums);
router.get('/mp3/event', mp3Controller.event);
router.get('/mp3/news', mp3Controller.news);
router.get('/mp3/contact', mp3Controller.contact);
router.get('/mp3/login', mp3Controller.login);
router.get('/mp3/elements', mp3Controller.elements);

module.exports = router;