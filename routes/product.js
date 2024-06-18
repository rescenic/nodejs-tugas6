const express = require("express");
const router = express.Router();
const products = require("../data/products");

// Jawaban Soal No.6: GET products by name query
router.get("/", (req, res) => {
  const name = req.query.name;
  if (name) {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredProducts);
  } else {
    res.json(products);
  }
});

// Jawaban Soal No.7: GET products by category and optional name query
router.get("/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const name = req.query.name;

  // Filter products by category
  let filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Further filter by name if name query is provided
  if (name) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.json(filteredProducts);
});

module.exports = router;
