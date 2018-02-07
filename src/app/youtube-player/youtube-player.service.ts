import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { Video } from './video';

let _window: any = window;
const httpOptions = {headers : new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable()
export class YoutubePlayerService {
	public yt_player;
	private videosUrl = 'http://localhost:8000/api/';  // URL to web api
	private currentVideoId: string;

	 constructor(private http: HttpClient,private _http: Http) { }

	 createPlayer(): void {
	     let interval = setInterval(() => {
	       if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
	         this.yt_player = new _window.YT.Player('ytb-player', {
	           width: '1150',
	           height: '565',
						 //videoId: videoId,
	           playerVars: {
	             iv_load_policy: '3',
	             rel: '0'
	           }
	         });
	         clearInterval(interval);
	       }
	     }, 100);
	   }

	playVideo(videoId: string): void {
	     this.yt_player.loadVideoById(videoId);
	     this.currentVideoId = videoId;
	   }

	stopVideo(){
		this.yt_player.stopVideo();
	}

  getVideos() {
    return this._http.get(this.videosUrl).map((res)=>res.json());
  }

	getVideosByHour() {
    return this._http.get(this.videosUrl+'show_hour').map((res)=>res.json());
  }

	addVideo (videos: Video ){
    return this._http.post(this.videosUrl+'create', JSON.stringify(videos));
	}

	updateVideo (video: Video, id){
	  return this._http.put(this.videosUrl+'update/'+id, JSON.stringify(video));
	}

	private handelError(error: Response){

    return Observable.throw(error.json() || 'server error');

  }

	deleteVideo (video: Video | number) {
		const id = typeof video === 'number' ? video : video.id;
		return this._http.delete(this.videosUrl+'delete/'+id);
	}

}
