const { Schema, model } = require("mongoose");

const guilds = new Schema({
    _id: String,
    logs: { type: String, default: null },
})

const guildModel = model("guilds", guilds);

module.exports = guildModel;