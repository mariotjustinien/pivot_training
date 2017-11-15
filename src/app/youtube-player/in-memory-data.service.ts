import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const videos = [
      {
        id: 0,
        url: 'https://www.youtube.com/watch?v=9wg3v-01yKQ',
        videoTitle : "Harry Styles - Kiwi"
      },
      {
        id: 1,
        url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
        videoTitle : "Ed Sheeran - Perfect (Official Music Video)"
      },
      {
        id: 2,
        url: 'https://www.youtube.com/watch?v=vQ3XgMKAgxc',
        videoTitle : "Avicii - Lonely Together ft. Rita Ora"
      },
      {
        id: 3,
        url: 'https://www.youtube.com/watch?v=tVKaN_H35xs',
        videoTitle : "DADJU - Reine (Clip Officiel)"
      },
      {
        id: 4,
        url: 'https://www.youtube.com/watch?v=z_4EIsrAuuA',
        videoTitle : "DADJU - Ma Fierté ft. Maître Gims, Alonzo (Clip Officiel)"
      },
    ];
    return {videos};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
