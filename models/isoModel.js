const mongoose = require("mongoose");

//  iso schema
const isoSechma = new mongoose.Schema({
  srNo: {
    type: Number,
    require: true,
  },
  condition: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  controller: {
    type: String,
    require: true,
  },
  files: {
    type: Array,
  },
});

const Iso = mongoose.model("Iso", isoSechma);
module.exports = Iso;
