// routes/category.js

const express = require("express");
const router = express.Router();
let categories = require("../data/categories");

// Jawaban Soal No. 1: GET all categories
router.get("/", (req, res) => {
  res.json(categories);
});

// Jawaban Soal No. 2: GET category by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: "Kategori tidak ditemukan." });
  }
});

// Jawaban Soal No. 3: POST a new category or several categories at once
router.post("/", (req, res) => {
  const newCategories = Array.isArray(req.body) ? req.body : [req.body];

  // Find the current maximum ID in the categories array
  const maxId = categories.reduce(
    (max, category) => Math.max(max, category.id),
    0
  );

  // Add each new category with a sequential ID
  const addedCategories = newCategories.map((category, index) => {
    const newCategory = {
      id: maxId + 1 + index,
      name: category.name,
    };
    categories.push(newCategory);
    return newCategory;
  });

  res.status(201).json(addedCategories);
});

// Jawaban Soal No. 4: PUT update category by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find((c) => c.id === id);
  if (category) {
    category.name = req.body.name;
    res.json(category);
  } else {
    res.status(404).json({ message: "Kategori tidak ditemukan." });
  }
});

// Jawaban Soal No. 5: DELETE category by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  categories = categories.filter((c) => c.id !== id);
  res.status(204).send();
});

module.exports = router;
