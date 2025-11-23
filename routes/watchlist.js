// routes/watchlist.js
// All watchlist routes in one simple file.

const express = require("express");
const router = express.Router();

// Import controller functions
const controller = require("../controllers/watchlistController");

// List all items
router.get("/", controller.listItems);

// Add new item
router.get("/new", controller.showAddForm);
router.post("/", controller.createItem);

// Edit item
router.get("/:id/edit", controller.showEditForm);
router.post("/:id/edit", controller.updateItem);

// Delete item
router.get("/:id/delete", controller.showDeleteForm);
router.post("/:id/delete", controller.deleteItem);

module.exports = router;
