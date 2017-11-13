import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Video } from './video';


@Injectable()
export class YoutubePlayerService {


  private headers = new Headers({'Content-Type': 'application/json'});
  private videosUrl = 'api/videos';  // URL to web api

  constructor(private http: Http) { }

  getVideos(): Promise<Video[]> {
    return this.http.get(this.videosUrl)
      .toPromise()
      .then(response => response.json().data as Video[])
      .catch(this.handleError);
  }


  create(url: string, videoId: string): Promise<Video> {
    return this.http
      .post(this.videosUrl, JSON.stringify({url: url, videoId: videoId} ), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Video)
      .catch(this.handleError);
  }

  getVideo(id: number): Promise<Video> {

    const url =  '${this.videosUrl}/${id}';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Video)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
