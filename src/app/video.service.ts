import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/domain/video';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videos$: Observable<Video[]>;

  constructor(private httpClient: HttpClient) {
    this.videos$ = this.httpClient.get<Video[]>(
      'https://raw.githubusercontent.com/mvdam/mvd-cdn/main/videos/video-collection.json'
    );
  }

  getVideos() {
    return this.videos$;
  }

  findVideoById(id: string) {
    return this.videos$.pipe(map((videos) => videos.find((v) => v.id === id)));
  }

  findByQuery(query: string) {
    if (!query) {
      return this.videos$;
    }

    return this.videos$.pipe(
      map((v) =>
        v.filter(
          (v) =>
            v.title.toLowerCase().includes(query.toLowerCase()) ||
            v.description.toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  }
}
