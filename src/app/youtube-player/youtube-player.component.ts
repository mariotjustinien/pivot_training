import { Video } from './video';
import { YoutubePlayerService } from './youtube-player.service';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  baseUrl = 'https://www.youtube.com/embed/';
  url: SafeResourceUrl;
  videos: Video[];
  selectVideo: Video;
  lst: string;
  video: Video;
  test: any = {videoId: 'HX0ZoKn4BW4'};

  constructor(
    private videoService: YoutubePlayerService,
    private router: Router ,
    private sanitizer: DomSanitizer,
  ) { }

  onSelect(video: Video): void {
    this.selectVideo = video;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.selectVideo.videoId);
    console.log(this.url);
  }

  ngOnInit() {
    this.getVideos() ;
  }

  getVideos(): void {
    this.videoService.getVideos().then(videos => this.videos = videos);
  }
  show(youtubeUrl: string): void {
    youtubeUrl = youtubeUrl.trim() ;
    if ( !youtubeUrl) { return; }
    this.lst = (youtubeUrl.split('/')[3]).split('=')[1];
    this.add(youtubeUrl, this.lst);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.selectVideo.videoId);
  }

  add(youtubeUrl: string, videoId: string): void {
    this.videoService.create(youtubeUrl, this.lst )
      .then(video => {
        this.videos.push(video);
        this.selectVideo = video; });
  }
}
