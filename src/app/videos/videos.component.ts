import { Component } from '@angular/core';
import { Video } from 'src/domain/video';

const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'N E T R U N (Synthwave/Electronic/Retrowave MIX)',
    thumbnailUrl:
      'https://i.ytimg.com/vi/S7i3ugniyjg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9eNb_5uCtez02Z_ccHgbTQbRtfw',
    playbackUrl: 'https://www.youtube.com/watch?v=S7i3ugniyjg',
  },
  {
    id: 2,
    title: '4 HOUR MIX - Gear Seekers: We Make The Music',
    thumbnailUrl:
      'https://i.ytimg.com/vi/aMoPefb_qRw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZfVAABQPIba4s13IbOqQR_jI8Jg',
    playbackUrl: 'https://www.youtube.com/watch?v=aMoPefb_qRw',
  },
];

@Component({
  selector: 'video-list',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  videos = VIDEOS;
}
