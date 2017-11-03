var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var videoSchema = new Schema({
    name:String,
    url:String,
    like:Number,
    dislike:Number
});

module.exports = mongoose.model("video",videoSchema,"videos");