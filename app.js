// app.js

const express = require("express");
const app = express();
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Sanbercode E-Commerce REST API Server",
    data: "Created by: Muhammad Ridwan Hakim",
  });
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

const BASE_URL = "localhost";
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://${BASE_URL}:${PORT}`);
});
