const mongoose = require("mongoose");

const crushSchema = new mongoose.Schema({
    crushName: String,
})

const Crush = mongoose.model('Crush', crushSchema);
module.exports = Crush ;