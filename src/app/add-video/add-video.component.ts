import { Component } from '@angular/core';
import { NewVideo } from 'src/domain/video';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';

const NEW_VIDEO: NewVideo = {
  title: 'Flying to Arasaka Waterfront - Cyberpunk 2077 mellow tunes - 4 hours',
  thumbnailUrl:
    'https://i.ytimg.com/vi/2w9FoGmRqD8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDnUNKfhFsY44KgnBgNZ-SvJuCwTg',
  playbackUrl: 'https://www.youtube.com/embed/2w9FoGmRqD8',
  description:
    'Enjoy the sunset, then sunrise again, flying from Kabuki, over Little China, all the way out to the coast of the Arasaka Waterfront. Take in great views of the Metro Med Center, Konpeki Plaza and more.',
};

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss'],
})
export class AddVideoComponent {
  video: NewVideo = { ...NEW_VIDEO };

  constructor(private videoService: VideoService, private router: Router) {}

  saveVideo() {
    this.videoService.addVideo(this.video);
    this.router.navigate(['/']);
  }
}
