// Contains all controller functions for CRUD operations.

const WatchItem = require("../models/WatchItem");

// Show all items
exports.listItems = async (req, res) => {
  try {
    const items = await WatchItem.find().sort({ title: 1 });
    res.render("watchlist/list", { items });
  } catch (err) {
    console.log(err);
    res.send("Error loading watchlist.");
  }
};

// Show the add form
exports.showAddForm = (req, res) => {
  res.render("watchlist/new");
};

// Handle add form submit
exports.createItem = async (req, res) => {
  try {
    await WatchItem.create(req.body);
    res.redirect("/watchlist");
  } catch (err) {
    console.log(err);
    res.send("Error creating item.");
  }
};

// Show the edit form
exports.showEditForm = async (req, res) => {
  try {
    const item = await WatchItem.findById(req.params.id);
    if (!item) return res.send("Item not found.");
    res.render("watchlist/edit", { item });
  } catch (err) {
    console.log(err);
    res.send("Error loading item.");
  }
};

// Handle edit submit
exports.updateItem = async (req, res) => {
  try {
    await WatchItem.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/watchlist");
  } catch (err) {
    console.log(err);
    res.send("Error updating item.");
  }
};

// Show delete confirmation
exports.showDeleteForm = async (req, res) => {
  try {
    const item = await WatchItem.findById(req.params.id);
    if (!item) return res.send("Item not found.");
    res.render("watchlist/delete", { item });
  } catch (err) {
    console.log(err);
    res.send("Error loading delete page.");
  }
};

// Handle delete
exports.deleteItem = async (req, res) => {
  try {
    await WatchItem.findByIdAndDelete(req.params.id);
    res.redirect("/watchlist");
  } catch (err) {
    console.log(err);
    res.send("Error deleting item.");
  }
};
