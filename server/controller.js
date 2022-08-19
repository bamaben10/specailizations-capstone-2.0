const watchlist = [];

module.exports = {
  addStock: (req, res) => {
    watchlist.push(req.body);
    res.status(200).send(watchlist);
  },

  getStock: (req, res) => {
    res.status(200).send(watchlist);
  },

  removeStock: (req, res) => {
    watchlist.splice(req.body.index, 1);
    res.status(200).send(watchlist);
  },
};
