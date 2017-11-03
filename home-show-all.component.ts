import { Component, OnInit } from '@angular/core';
import {Video } from "../video";
import { DataProviderService } from "../data-provider.service";
@Component({
  selector: 'app-home-show-all',
  templateUrl: './home-show-all.component.html',
  styleUrls: ['./home-show-all.component.css']
})
export class HomeShowAllComponent implements OnInit {

  constructor(private dataService:DataProviderService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(response => this.videos=response);
  }
  url:String;
  selected:Boolean=false;
  like=0;
  dislike=0;
  videos:Video[];

  display(id)
  {
    id.style.display="block";
  }
  notDisplay(id){
    id.style.display="none";
  }
 playVideo(video){
   var url="http://localhost:8888/"+video.name+".mp4";
  this.url=url;
  this.selected=true;
  this.like=video.like;
  this.dislike=video.dislike;
 }
 close(){
   this.selected=false;
 }
 countLike(){
   this.like=this.like+1;
 }
 countDislike()
 {
   this.dislike=this.dislike + 1;
 }
}
