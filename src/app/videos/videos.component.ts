import { Component, OnInit } from '@angular/core';
import { Video } from 'src/domain/video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videos = this.videoService.getVideos();
  }
}
