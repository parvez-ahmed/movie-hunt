var express = require("express");
var video = require("./mongo/Schema");
var mongoose = require("mongoose");
var app = express();
app.use(express.static("dist"));
app.use(express.static("public"));
app.use(express.static("video"));
mongoose.connect("mongodb://localhost/videoCollection",function(){
    console.log("connection made with data-base");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+'/dist/index.html');
});
app.get("/video",function(req,res){
         console.log("get request is made");
         video.find({}).exec(function(err,responseVideos){
                res.json(responseVideos);
         })
});
app.put("/choice/:id/:like/:dislike",function(req,res){
    console.log("put request received");
    video.findByIdAndUpdate(req.params.id,
    {$set:{like: req.params.like, dislike: req.params.dislike}},
    {new: true},
    function(err,object){
      if(err)
      {
          console.log("error during updation");
      }
      else
      {
          res.json(object);
      }
    });
});

var server = app.listen(8888,function(){
    console.log("server is running..");
});