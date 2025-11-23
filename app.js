const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// IMPORT THE ROUTES
const watchlistRoutes = require("./routes/watchlist");

// HOME PAGE
app.get("/", (req, res) => {
  res.render("index");
});

// USE THE WATCHLIST ROUTES
app.use("/watchlist", watchlistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
