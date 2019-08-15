const fetch = require("node-fetch");

const searchCtrl = {};

searchCtrl.search = async (req, res) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${req.query.q}&_limit=10`
  );
  const data = await response.json();
  res.json(data);
};

module.exports = searchCtrl;
