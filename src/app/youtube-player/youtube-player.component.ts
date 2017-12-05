
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {Video} from './video';
import {YoutubePlayerService} from './youtube-player.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  id: string;
  videos: Video[];
  selectedVideo: Video;
  ytUrl = "https://www.youtube.com/watch?v=";
  modalRef: BsModalRef;
  public loading = false;
  constructor( private youtubeplayerservice: YoutubePlayerService,private modalService: BsModalService ) { }

  ngOnInit() {
    let doc = window.document;
    let playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);
    this.youtubeplayerservice.createPlayer();
    this.getVideos();
    this.loading = true;
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

addVideo(url,videoTitle,thumbnailUrl: string): void {
  url = url.trim();
  thumbnailUrl = 'http://img.youtube.com/vi/'+url.replace(this.ytUrl,"")+'/hqdefault.jpg'
  if(!url) {return;}
  this.youtubeplayerservice.addVideo({url,videoTitle,thumbnailUrl} as Video).subscribe(video => this.videos.push(video));
  this.showVideo(url);
  this.getVideos();
}

deleteVideo(video: Video): void {
  this.videos = this.videos.filter(h => h !== video);
  this.youtubeplayerservice.deleteVideo(video).subscribe;
}

openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
