import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Router } from '@angular/router';
import { Video } from 'src/domain/video';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
})
export class PlaybackComponent implements OnInit {
  video: Video | undefined;
  videoSrc: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const videoId = Number(this.route.snapshot.paramMap.get('id'));

    if (!videoId) {
      this.router.navigate(['/']);
      return;
    }

    this.video = this.videoService.findVideoById(videoId);
    this.videoSrc = this.sanitizeUrlAndMarkTrusted(
      this.video?.playbackUrl || null
    );
  }

  private sanitizeUrlAndMarkTrusted(url: string | null) {
    const unsafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url || '');
    const sanitizedUrl =
      this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, unsafeUrl) || '';

    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
  }
}
