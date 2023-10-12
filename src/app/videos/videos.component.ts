import { Component } from '@angular/core';
import { Video } from 'src/domain/video';
import { VideoService } from '../video.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos$: Observable<Video[]> = EMPTY;

  constructor(private videoService: VideoService) {
    this.videos$ = this.videoService.getVideos();
  }
}
