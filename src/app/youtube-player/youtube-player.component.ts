
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {Video} from './video';
import {YoutubePlayerService} from './youtube-player.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})

export class YoutubePlayerComponent implements OnInit {
  id: string;
  videos: Video[];
  error: string = '';
  selectedVideo: Video;
  ytUrl = "https://www.youtube.com/watch?v=";
  modalRef: BsModalRef;
  sorted_desc = true;
  public loading = false;

  constructor( private youtubeplayerservice: YoutubePlayerService,private modalService: BsModalService, private datepipe: DatePipe) { }

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
  this.youtubeplayerservice.getVideos()
                           .subscribe(
                             (res)=>{
                               console.log(res.videos);
                               this.videos =res.videos;
                             });
  this.sorted_desc = true;
}

getVideosbyhour(): void {
  this.youtubeplayerservice.getVideosByHour()
                           .subscribe(
                             (res)=>{
                               console.log(res.videos);
                               this.videos =res.videos;
                             });
this.sorted_desc = false;
}

updateAndShowVideo(video: Video): void{
  let time = new Date();
  let heure=this.datepipe.transform(time,"HH:mm:ss");
  let videos:any;
  videos = {id:'', url: video.url , heure: heure};
  this.youtubeplayerservice.updateVideo(videos,video.id).subscribe(
        res => {
          console.log(res);
          this.showVideo(video.url);
        },
        err => {
          console.log("Tsa mety ");
        }
      );
}

addVideo(url: string): void {
  let time = new Date();
  let heure=this.datepipe.transform(time,"HH:mm:ss");
  let video: any;

  video = {id:'', url: url, heure: heure};

    this.youtubeplayerservice.addVideo(video).subscribe(
          res => {
            console.log(res);
            this.showVideo(url);
            this.getVideos();
          },
          err => {
            console.log("Tsa mety ");
          }
        );
}

deleteVideo(video: Video): void {
  this.videos = this.videos.filter(h => h !== video);
  this.youtubeplayerservice.deleteVideo(video).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Tsa mety ");
        }
      );

  this.youtubeplayerservice.stopVideo();
}

openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
