import { Injectable } from '@angular/core';
import { Video, NewVideo } from 'src/domain/video';

const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'N E T R U N (Synthwave/Electronic/Retrowave MIX)',
    thumbnailUrl:
      'https://i.ytimg.com/vi/S7i3ugniyjg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9eNb_5uCtez02Z_ccHgbTQbRtfw',
    playbackUrl: 'https://www.youtube.com/embed/S7i3ugniyjg',
    description: 'A video from INEXED',
  },
  {
    id: 2,
    title: '4 HOUR MIX - Gear Seekers: We Make The Music',
    thumbnailUrl:
      'https://i.ytimg.com/vi/aMoPefb_qRw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZfVAABQPIba4s13IbOqQR_jI8Jg',
    playbackUrl: 'https://www.youtube.com/embed/aMoPefb_qRw',
  },
];

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videos = VIDEOS;

  getVideos() {
    return this.videos;
  }

  findVideoById(id: number) {
    return this.videos.find((v) => v.id === id);
  }

  addVideo(video: NewVideo) {
    this.videos = [
      ...this.videos,
      {
        ...video,
        id: this.videos.length + 1,
      },
    ];
  }
}
