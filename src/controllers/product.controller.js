const fetch = require("node-fetch");

productCtrl = {};

productCtrl.getProducts = async (req, res) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await response.json();
  res.json(data);
};

productCtrl.getProduct = async (req, res) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${req.params.id}`
  );
  const data = await response.json();
  res.json(data);
};

module.exports = productCtrl;
