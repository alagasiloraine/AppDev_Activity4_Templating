const mp3Controller = {
  index: (req, res) => {
      res.render('home');
  },
  playlist: (req, res) => {
      res.render('playlist');
  },
  artist: (req, res) => {
      res.render('artist');
  },
  albums: (req, res) => {
      res.render('albums');
  },
  favorites: (req, res) => {
      res.render('favorites');
  }
};

module.exports = mp3Controller;