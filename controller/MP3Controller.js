const mp3Controller = {
    index: (req, res) => {
        res.render('home', {title: 'MP3'});
    },
    albums: (req, res) => {
        res.render('albums', {title: 'MP3'});
    },
    event: (req, res) => {
        res.render('event', {title: 'MP3'});
    },
    news: (req, res) => {
        res.render('news', {title: 'MP3'});
    },
    contact: (req, res) => {
        res.render('contact', {title: 'MP3'});
    },
    login: (req, res) => {
        res.render('login', {title: 'MP3'});
    },
    elements: (req, res) => {
        res.render('elements', {title: 'MP3'});
    }
};

module.exports = mp3Controller;