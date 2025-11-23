// This file defines the MongoDB schema for one watchlist item.

const mongoose = require("mongoose");

// A very simple schema for each entry in the watchlist.
const watchItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // title must be provided
  },
  type: {
    type: String,
    enum: ["Movie", "TV"], // only allow Movie or TV
    default: "Movie",
  },
  status: {
    type: String,
    enum: ["Planned", "Watching", "Finished"],
    default: "Planned",
  },
  notes: {
    type: String,
  },
});

// Export a model so we can use it in app.js
module.exports = mongoose.model("WatchItem", watchItemSchema);
