
import { Component, OnInit, Input } from '@angular/core';
import {Video} from './video';
import {YoutubePlayerService} from './youtube-player.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  id: string;
  title:string;
  videos: Video[];
  selectedVideo: Video;
  ytUrl = "https://www.youtube.com/watch?v=";
  constructor( private youtubeplayerservice: YoutubePlayerService ) { }

  ngOnInit() {
    let doc = window.document;
    let playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);
    this.youtubeplayerservice.createPlayer();
    this.getVideos();
  }

onSelect(video: Video): void {
      this.selectedVideo = video;
    }

showVideo(url:string): void{
    this.id= url.replace(this.ytUrl,"");
    this.youtubeplayerservice.playVideo(this.id);
}

getVideos(): void {
  this.youtubeplayerservice.getVideos().subscribe(videos => this.videos = videos);
}

addVideo(url,videoTitle: string): void {
  url = url.trim();
  if(!url) {return;}
  this.youtubeplayerservice.addVideo({url,videoTitle} as Video).subscribe(video => this.videos.push(video));
  this.getVideos();
}

deleteVideo(video: Video): void {
  this.videos = this.videos.filter(h => h !== video);
  this.youtubeplayerservice.deleteVideo(video).subscribe;
}
}
