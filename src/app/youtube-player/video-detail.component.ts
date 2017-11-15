import { Component, OnInit, Input } from '@angular/core';

import {Video} from './video';
import {YoutubePlayerService} from './youtube-player.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls:['./youtube-player.component.css']
})

export class VideoDetailComponent implements OnInit{
@Input() video: Video;

constructor(
  private YoutubePlayerService: YoutubePlayerService
){}

ngOnInit(): void{

}

save(): void{
  this.YoutubePlayerService.updateVideo(this.video).subscribe();
}

}
