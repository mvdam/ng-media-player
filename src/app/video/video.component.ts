import { Component, Input } from '@angular/core';
import { Video } from 'src/domain/video';

@Component({
  selector: 'video-item',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() video?: Video;
}
