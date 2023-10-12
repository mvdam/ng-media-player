import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';
import { Video } from 'src/domain/video';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent implements OnInit {
  video$: Observable<Video | undefined> = EMPTY;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const videoId = String(this.route.snapshot.paramMap.get('id'));

    if (!videoId) {
      this.router.navigate(['/']);
      return;
    }

    this.video$ = this.videoService.findVideoById(videoId);
  }
}
