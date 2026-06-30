const mongoose = require("mongoose");
const schema = mongoose.Schema;
const descriptions = new schema({
    name: String,
    description:String,
})
const description = mongoose.model("description",descriptions)
module.exports = description