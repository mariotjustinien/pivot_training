import { Component, OnInit, Input } from '@angular/core';
import {Video} from '../video';
import {YoutubePlayerService} from '../youtube-player.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html'
})
export class VideoDetailComponent implements OnInit{
@Input() video: Video;

constructor(
  private YoutubePlayerService: YoutubePlayerService,
  private datepipe: DatePipe
){}

ngOnInit(): void{

}

save(url,id: string): void{
  let time = new Date();
  let heure=this.datepipe.transform(time,"HH:mm:ss");
  let video:any;

  video = {id:'', url: url, heure: heure};
  this.YoutubePlayerService.updateVideo(video,id).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Tsa mety ");
        }
      );
}

}
